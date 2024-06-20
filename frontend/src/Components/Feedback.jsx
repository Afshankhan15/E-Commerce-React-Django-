import React from 'react'

const Feedback = () => {
    const Clients = [
        {
          name: "John Deo",
          role: "Co-founder of Amazon",
          description:
          "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
          src: "https://media.gettyimages.com/id/1199999894/photo/santa-monica-california-john-cena-visits-the-imdb-show-on-january-10-2020-in-santa-monica.jpg?s=612x612&w=0&k=20&c=0ZNCdywiXhzonl7o0nm9wq2z3hsAf0DdU7R5_GYrH3A=",
        },
        {
          name: "Roman Reigns",
          role: "Founder of Wwe",
          description:
          "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
          src: "https://media.gettyimages.com/id/1140572597/photo/new-york-new-york-wwe-star-roman-reigns-visits-the-elvis-duran-z100-morning-show-at-z100.jpg?s=612x612&w=0&k=20&c=JhcgjFlecOT9icM8TYYrHEbzPRrXYkNikVXfHvW29xs=",
        },
        {
          name: "The Rock",
          role: "Founder of Microsoft",
          description:
          "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
          src: "https://media.gettyimages.com/id/1434723564/photo/madrid-spain-us-actor-dwayne-johnson-attends-the-black-adam-photocall-at-nh-collection-madrid.jpg?s=612x612&w=0&k=20&c=tXvmeRpwjhLSho0X66jzNfLE7P-p8eHhezATWBSzFc8=",
        },
      ];
  return (
    <div className='w-full mt-24'>
        <h1 className='text-4xl font-extrabold text-center px-4 md:px-0'>What our happy client say</h1>
        <div className='grid md:grid-cols-3 max-w-7xl mx-auto px-8 py-10 gap-6'>
            {/* card */}
           {
            Clients.map((element, idx) => (
                <div key={idx} className='flex flex-col px-6 py-6 bg-gray-100 border rounded-md max-w-[480px] mx-auto transform transition-transform duration-200 hover:bg-gray-200 cursor-pointer hover:-translate-y-1 ease-in-out'>
                <div className='flex items-center gap-4'>
                    <img 
                    className='h-16 w-16 object-cover border-4 border-white rounded-full'
                    src={element.src}
                    alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-gray-800'>{element.name}</h1>
                        <p className='text-xs text-gray-600 font-semibold'>{element.role}</p>
                    </div>
                </div>
                <div class="flex space-x-1 mt-4">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>

                <p className='mt-6 text-sm text-gray-800 leading-relaxed'>{element.description}</p>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default Feedback