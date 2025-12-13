// Debug with simple email content
const nodemailer = require('nodemailer');

async function debugSimpleEmail() {
  console.log('🔍 Testing Simple Email Content...');
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 587,
    secure: false,
    auth: {
      user: 'solvixcore@yahoo.com',
      pass: 'nfocsohvppkhlltx',
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  try {
    console.log('📧 Testing simple text email...');
    
    const simpleMailOptions = {
      from: 'solvixcore@yahoo.com',
      to: 'solvixcore@yahoo.com',
      subject: 'Simple Test Email',
      text: 'This is a simple test email to debug the issue.',
    };

    const result1 = await transporter.sendMail(simpleMailOptions);
    console.log('✅ Simple text email sent:', result1.messageId);

    console.log('📧 Testing simple HTML email...');
    
    const htmlMailOptions = {
      from: 'solvixcore@yahoo.com',
      to: 'solvixcore@yahoo.com',
      subject: 'Simple HTML Test Email',
      html: '<h1>Simple HTML Test</h1><p>This is a simple HTML test email.</p>',
    };

    const result2 = await transporter.sendMail(htmlMailOptions);
    console.log('✅ Simple HTML email sent:', result2.messageId);

    console.log('📧 Testing with replyTo header...');
    
    const replyToMailOptions = {
      from: 'solvixcore@yahoo.com',
      to: 'solvixcore@yahoo.com',
      replyTo: 'c4rigniter@gmail.com',
      subject: 'Test with ReplyTo Header',
      html: '<h1>ReplyTo Test</h1><p>This email has a replyTo header set to Gmail.</p>',
    };

    const result3 = await transporter.sendMail(replyToMailOptions);
    console.log('✅ Email with replyTo sent:', result3.messageId);
    
    console.log('🎉 All simple tests passed! The issue might be with complex HTML content.');
    
  } catch (error) {
    console.error('❌ Simple email test failed:', error.message);
    console.log('🔍 Failed at step:', error.command);
  }
}

// Run debug test
debugSimpleEmail();