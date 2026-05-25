import React from 'react'

export const ReturnPolicy = () => {
    const data = [
        {
            head2: "General Principle",
            paragragh: "Softech Digital Group is committed to client satisfaction. However, since our services are customized and digital in nature, refunds are limited. Work once delivered cannot be ‘returned’ like physical goods."
        },
        {
            head2: "Non Refundable Services",
            paragragh: "Refunds will not be issued for: – Completed work or deliverables that were accepted by the client. – Consultancy or advisory hours already utilized. – Third-party licenses, subscriptions, or resources purchased on behalf of the client. – Any project phase already signed off by the client.",
        },
        {
            head2: "Refund Eligibility",
            paragragh: "Refund requests may be considered only if: – The service has not yet commenced. – There is a demonstrable failure to deliver agreed deliverables, despite reasonable opportunities to remedy. – The client cancels the service within 7 days of contract initiation, before significant work has begun."
        },
        {
            head2: "Partial Refunds",
            paragragh: "Partial refunds may be issued where: – Only part of the project has been completed. – Work delivered does not meet agreed specifications, and corrective measures were unsuccessful. Refund amounts will be calculated proportionally, based on work completed versus work pending."
        },
        {
            head2: "Refund Request Process",
            paragragh: "To initiate a refund: – Clients must email support@dev.softechdigitalgroup.com with a written request. – The request must include the project name, date of engagement, and reason for the refund. – Refund requests will be reviewed within 10 business days."
        },
        {
            head2: "Dispute Resolution",
            paragragh: "If refund disputes arise: – Both parties will attempt resolution via direct communication. – If unresolved, disputes will be referred to arbitration under applicable laws before resorting to court proceedings."
        }
        
    ]
    console.log(data)
    return (
        <div className=' flex flex-col gap-6 p-10 w-full lg:px-30 py-10'>
            <div className='flex flex-col py-10'>
                <h1 className='text-4xl text-[#122a52] font-sans lg:text-5xl font-black'>Refund & Return Policy</h1>
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
