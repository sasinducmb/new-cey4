import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function WhatsAppWidget() {
  return (
    <div>
      <FloatingWhatsApp 
        phoneNumber="94719980449"
        accountName="Cey4hub"
        avatar="assets/img/logo/logo.png" // Optional
        statusMessage="Online"
        chatMessage="Hi! How can we help you?"
        allowClickAway
        notification={false}
        notificationSound={false}
      />
    </div>
  );
}

export default WhatsAppWidget;
