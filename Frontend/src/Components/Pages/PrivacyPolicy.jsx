import React from 'react'

export const PrivacyPolicy = () => {
    const data = [
        {
            head2: "1. Who We Are",
            paragragh: "Softech Digital Group is a digital solutions company offering technology services, creative solutions, and digital transformation support.Our mission is to provide innovative services while maintaining the highest standards of privacy and transparency."
        },
        {
            head2: "2. Information We Collect",
            paragragh: "We collect information to deliver better experiences, improve our services, and maintain security. The types of data we may collect include:",
            Head3_1: "a. Personal Information",
            paragragh_1: "Name, email address, phone number, and company details (when you contact us or fill out forms). Billing and payment details (for service transactions).",
            Head3_2: "b. Technical Information",
            paragragh_2: "IP address, browser type, device information, and operating system. Usage data such as pages visited, clicks, and session duration.",
            Head3_3: "c. Cookies & Tracking Technologies",
            paragragh_3: "We use cookies and analytics tools to understand how visitors interact with our site and to enhance performance. You can manage cookie preferences through your browser settings."
        },
        {
            head2: "3. How We Use Your Information",
            paragragh: "We use your information to: Provide and manage our digital services and customer support. Respond to inquiries, project requests, and partnership proposals. Improve website functionality, design, and performance. Send updates, newsletters, or promotional offers(only with your consent). Maintain compliance with legal and regulatory requirements. We never sell or trade your personal information."
        },
        {
            head2: "4. Legal Basis for Processing (GDPR Compliance)",
            paragragh: "We process personal data based on: Your consent. Contractual necessity (to provide requested services). Legitimate business interests (such as analytics or service improvement). Legal obligations (as required by law)."
        },
        {
            head2: "5. How We Protect Your Information",
            paragragh: "We implement industry-standard security measures, including: Encryption and secure data transmission (SSL/TLS). Restricted access to personal data. Regular monitoring for vulnerabilities and unauthorized access. While we strive for absolute security, no digital transmission is entirely risk-free, and users share information at their own discretion."
        },
        {
            head2: "6. Data Retention",
            paragragh: "We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once data is no longer needed, it is securely deleted or anonymized."
        },
        {
            head2: "7. Sharing and Disclosure",
            paragragh: "We may share information only with: Trusted partners or service providers assisting in operations (under strict confidentiality). Legal authorities, if required by law or to protect rights and safety. We do not sell or rent your data to third parties for marketing purposes."
        },
        {
            head2: "8. Your Rights",
            paragragh: "Depending on your location, you may have the right to: Access, correct, or delete your personal data. Withdraw consent at any time. Object to data processing or request data portability. You can exercise these rights by contacting us at info@Softechdigitalgroup.com."
        },
        {
            head2: "9. Cookies and Analytics",
            paragragh: "We use cookies for analytics, performance, and personalization. Users may opt out of non-essential cookies through browser settings or preference banners displayed on our website."
        },
        {
            head2: "10. International Data Transfers",
            paragragh: "If data is transferred outside your country or region, we ensure that adequate protection standards (such as GDPR-approved safeguards) are maintained."
        },
        {
            head2: "12. Children’s Privacy",
            paragragh: "Our services are not directed to individuals under 16. We do not knowingly collect personal information from minors."
        },
        {
            head2: "13. Updates to This Policy",
            paragragh: "We may update this Privacy Policy periodically to reflect new practices or regulations. The updated version will be posted on our website with the “4/24/2026” date."
        }
    ]
    console.log(data)
    return (
        <div className=' flex flex-col gap-3 p-10 w-full lg:px-30 py-15  '>
            <div className='flex flex-col gap-10'>
                <h1 className='text-4xl text-[#122a52] font-sans lg:text-5xl font-black'>Privacy Policy</h1>
                <p className='text-sm text-[#8b9292] text-justify font-sans lg:text-base font-normal'>At <b>Softech Digital Group,</b> we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our websites, applications, products, and digital services.</p>
            </div>
            {data.map((privacydata, idx) => (
                <div key={idx} className=' flex flex-col'>
                    <div className='flex flex-col gap-0.5'>
                        <h2 className='text-xl text-[#122a52] font-sans lg:text-2xl font-bold'>{privacydata.head2}</h2>
                        <p className='text-sm text-justify text-[#8b9292] font-sans lg:text-base font-normal '>{privacydata.paragragh}</p>
                        <h3 className='text-md text-[#122a52] font-sans lg:text-xl font-medium px-3'>{privacydata.Head3_1}</h3>
                        <p className='text-sm text-[#8b9292] font-sans lg:text-base font-normal px-3'>{privacydata.paragragh_1}</p>
                        <h3 className='text-xl text-[#122a52] font-sans lg:text-xl font-medium px-3'>{privacydata.Head3_2}</h3>
                        <p className='text-sm text-[#8b9292] font-sans lg:text-base font-normal px-3'>{privacydata.paragragh_2}</p>
                        <h3 className='text-xl text-[#122a52] font-sans lg:text-xl font-medium px-3'>{privacydata.Head3_3}</h3>
                        <p className='text-sm  text-[#8b9292] font-sans lg:text-base font-normal px-3'>{privacydata.paragragh_3}</p>
                    </div>
                    
                </div>

            ))}
               <div>
                    <h2 className='text-xl text-[#122a52] font-sans lg:text-2xl font-bold'>14. Contact Us</h2>
                    <p className='text-sm text-[#8b9292] font-sans lg:text-base font-normal '>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:<br></br> Softech Digital Group Email: <a href="mailto:info@softechdigitalgroup.com" className="text-blue-500 underline">info@softechdigitalgroup.com</a> <br></br> Website: <a href="https://Softechdigitalgroup.com" className="text-blue-500 underline">Softechdigitalgroup.com</a> <br></br>Location 1: Pakistan (Local Office) - IBA City Campus, Plot # 68 & 88 Garden, Kiyani Shaheed Rd, Karachi <br></br>Location 2: UK (Regional Office) - Freckleton Business Centre, Freckleton Street, Blackburn, England, BB2 2AL <br></br> By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
                </div>
        </div>
    )
}
