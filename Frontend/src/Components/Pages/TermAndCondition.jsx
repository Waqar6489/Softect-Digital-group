import React from 'react'

export const TermAndCondition = () => {
    const data = [
        {
            head2: "Agreement to Terms",
            paragragh: "By using Softech Digital Group’s services or accessing our website, you agree to these Terms and Conditions."
        },
        {
            head2: "Scope of Services",
            paragragh: "All services are described in project proposals or contracts agreed with the client.",
        },
        {
            head2: "Payments and Invoices",
            paragragh: "– Payments must be made according to milestones or invoices issued. – Late payments may result in delayed delivery or suspension of services. – Taxes, duties, or bank charges are the client’s responsibility."
        },
        {
            head2: "Client Obligations",
            paragragh: "Clients must: – Provide accurate and timely information. – Approve or reject deliverables within the agreed timeframe. – Ensure intellectual property rights of materials shared with Softech Digital Group."
        },
        {
            head2: "Intellectual Property Rights",
            paragragh: "– Upon full payment, intellectual property for project deliverables transfers to the client (unless otherwise agreed). – Softech Digital Group may retain the right to display completed projects in its portfolio."
        },
        {
            head2: "Confidentiality",
            paragragh: "Both parties agree to keep all business, technical, and project-related information confidential, unless disclosure is required by law."
        },
        {
            head2: "Limitation of Liability",
            paragragh: "– We are not liable for indirect, incidental, or consequential damages arising from services. – Liability is limited to the amount paid by the client for the service."
        },
        {
            head2: "Indemnity",
            paragragh: "Clients agree to indemnify Softech Digital Group against claims arising from misuse of deliverables or breach of client obligations."
        },
        {
            head2: "Service Suspension and Termination",
            paragragh: "– Services may be suspended if payments are overdue. – Either party may terminate with written notice if obligations are not fulfilled."
        },
        {
            head2: "Force Majeure",
            paragragh: "We are not liable for delays or failures caused by events beyond our reasonable control (e.g., natural disasters, strikes, internet outages)."
        },
        {
            head2: "Governing Law",
            paragragh: "These Terms shall be governed by the laws of Pakistan, and disputes shall be subject to the exclusive jurisdiction of Pakistani courts."
        },
        
    ]
    console.log(data)
    return (
        <div className=' flex flex-col gap-6 p-10 w-full lg:px-30 py-10'>
            <div className='flex flex-col py-10'>
                <h1 className='text-4xl text-[#122a52] font-sans lg:text-5xl font-black'>Terms & Conditions</h1>
            </div>
            {data.map((privacydata, idx) => (
                <div key={idx} className=' flex flex-col '>
                    <div className='flex flex-col gap-0.5'>
                        <h2 className='text-xl text-[#122a52] font-sans lg:text-2xl font-bold'>{privacydata.head2}</h2>
                        <p className='text-sm text-justify text-[#8b9292] font-sans lg:text-base font-normal '>{privacydata.paragragh}</p>
                    </div>                    
                </div>

            ))}
        </div>
    )
}
