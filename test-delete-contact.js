const testDeleteContact = async () => {
  console.log('🗑️ Testing Contact Delete Functionality...\n')

  try {
    // Step 1: Login to get session cookie
    console.log('Step 1: Logging in...')
    const loginResponse = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'newpassword123'
      })
    })

    if (!loginResponse.ok) {
      console.log('❌ Login failed')
      return
    }

    const setCookieHeader = loginResponse.headers.get('set-cookie')
    console.log('✅ Login successful')

    // Step 2: Get contacts list
    console.log('\nStep 2: Fetching contacts...')
    const contactsResponse = await fetch('http://localhost:3000/api/admin/contacts', {
      headers: {
        'Cookie': setCookieHeader
      }
    })

    if (!contactsResponse.ok) {
      console.log('❌ Failed to fetch contacts')
      return
    }

    const contactsData = await contactsResponse.json()
    console.log(`✅ Found ${contactsData.contacts?.length || 0} contacts`)

    if (!contactsData.contacts || contactsData.contacts.length === 0) {
      console.log('No contacts to delete')
      return
    }

    // Step 3: Try to delete the first contact
    const firstContact = contactsData.contacts[0]
    console.log(`\nStep 3: Attempting to delete contact: ${firstContact.name} (${firstContact._id})`)

    const deleteResponse = await fetch('http://localhost:3000/api/admin/contacts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': setCookieHeader
      },
      body: JSON.stringify({
        contactId: firstContact._id
      })
    })

    console.log('Delete response status:', deleteResponse.status)

    if (deleteResponse.ok) {
      const deleteResult = await deleteResponse.json()
      console.log('✅ Delete successful!')
      console.log('Delete result:', deleteResult)
    } else {
      const errorData = await deleteResponse.json().catch(() => ({}))
      console.log('❌ Delete failed!')
      console.log('Error data:', errorData)
    }

    // Step 4: Verify deletion by fetching contacts again
    console.log('\nStep 4: Verifying deletion...')
    const verifyResponse = await fetch('http://localhost:3000/api/admin/contacts', {
      headers: {
        'Cookie': setCookieHeader
      }
    })

    if (verifyResponse.ok) {
      const verifyData = await verifyResponse.json()
      console.log(`Contacts after deletion: ${verifyData.contacts?.length || 0}`)
      
      const stillExists = verifyData.contacts?.find(c => c._id === firstContact._id)
      if (stillExists) {
        console.log('❌ Contact still exists - deletion failed')
      } else {
        console.log('✅ Contact successfully deleted')
      }
    }

  } catch (error) {
    console.log('❌ Test failed:', error.message)
  }
}

// Run the test
testDeleteContact()