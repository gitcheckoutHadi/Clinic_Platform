import React from "react";
import QRCode from "react-qr-code";
import { QRCodeMainContainer } from "./QRCodeDisplay.style";
import { MediumTypography, Typography } from "../textElement/fonts/Fonts";

interface QRCodeDisplayProps {
  type:
    | "text"
    | "url"
    | "contact"
    | "file"
    | "email"
    | "phone"
    | "location"
    | "sms"
    | "wifi"
    | "event"
    | "bitcoin"
    | "payment"
    | "geolocation"
    | "custom";
  value: string;
  size?: number; // Optional, default is 200
  title?: string; // Optional, default is
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  type,
  value,
  size,
  title,
}) => {
  let qrData = value;

  // Format the QR data based on type
  if (type === "contact") {
    // vCard format for contact info
    qrData = `BEGIN:VCARD
VERSION:3.0
FN:${value}
TEL:${value}
END:VCARD`;
  } else if (type === "file") {
    // Local or remote file path
    qrData = `file://${value}`;
  } else if (type === "url") {
    // Simple URL
    qrData = value;
  } else if (type === "email") {
    // Mailto link
    qrData = `mailto:${value}`;
  } else if (type === "phone") {
    // Phone number
    qrData = `tel:${value}`;
  } else if (type === "location") {
    // Geo location (latitude,longitude)
    const [latitude, longitude] = value.split(",");
    qrData = `geo:${latitude},${longitude}`;
  } else if (type === "sms") {
    // SMS (message to send to phone number)
    const [phoneNumber, message] = value.split(",");
    qrData = `sms:${phoneNumber}?body=${message}`;
  } else if (type === "wifi") {
    // Wi-Fi network credentials
    const [ssid, password] = value.split(",");
    qrData = `WIFI:T:WPA;S:${ssid};P:${password};;`;
  } else if (type === "event") {
    // Calendar event (iCalendar format)
    qrData = `BEGIN:VEVENT
SUMMARY:${value}
DTSTART:20250101T090000Z
DTEND:20250101T100000Z
LOCATION:Online
DESCRIPTION:Generated event
END:VEVENT`;
  } else if (type === "bitcoin") {
    // Bitcoin address
    qrData = `bitcoin:${value}`;
  } else if (type === "payment") {
    // Payment request (e.g., for cryptocurrency)
    qrData = `bitcoin:${value}?amount=0.01`;
  } else if (type === "geolocation") {
    // Geolocation (latitude,longitude)
    const [latitude, longitude] = value.split(",");
    qrData = `geo:${latitude},${longitude}`;
  } else if (type === "custom") {
    // Custom data type (raw data as is)
    qrData = value;
  }

  return (
    <QRCodeMainContainer>
      <MediumTypography
        text={title}
        lineHeight="1.25rem"
        letter_spacing="0.01563rem"
        opacity="0.5"
      />
      {/* <Typography
        text={value.toString()}
        lineHeight="1.5rem"
        letter_spacing="0.03125rem"
      /> */}
      <QRCode
        value={qrData}
        size={size || 100}
        bgColor={"#f6f6f6"}
        fgColor={"#0a0a0a"}
      />
    </QRCodeMainContainer>
  );
};

export default QRCodeDisplay;

// examples
{
  /* <QRCodeDisplay type="text" data="Hello, World!" />
<QRCodeDisplay type="url" data="https://example.com" />
<QRCodeDisplay type="contact" data="John Doe" />
<QRCodeDisplay type="file" data="/path/to/file.txt" />
<QRCodeDisplay type="email" data="example@example.com" />
<QRCodeDisplay type="phone" data="+1234567890" /> 
<QRCodeDisplay type="location" data="37.7749,-122.4194" />
<QRCodeDisplay type="url" data="https://example.com" />
<QRCodeDisplay type="contact" data="John Doe" />
<QRCodeDisplay type="wifi" data="MyNetwork,myPassword" />
*/
}
