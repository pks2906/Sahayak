import React, { useState } from 'react';

function ProductDialog({ product, onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto">
                <img alt="ecommerce" className="w-full h-auto object-cover object-center rounded" src={product.image} />
                <div className="mt-4">

                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                    <div className="flex mb-4">

                    </div>
                    <p className="leading-relaxed">{product.description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                    </div>
                    <div className="flex justify-between items-center">
                        <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>
                        <button onClick={onClose} className="text-white bg-greene border-0 py-2 px-6 focus:outline-none hover:bg-greene rounded">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Courses() {
    const [showAll, setShowAll] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Educating Deaf Children.",

            description: "The importance of Deaf culture/community and the need for a language-rich environment to help Deaf children academically, emotionally, and socially develop.",
            instructor: "Odette Swift: University of Cape Town",
            image: "123.jpeg"
        },
        {
            id: 2,
            name: "Managing ADHD, Autism, Learning Disabilities, and Concussion in School.",

            description: "By the end of this program, you will Have greater understanding of the neurobiology behind various learning difficulties, be able to identify effective teaching methodologies for children with learning difficulties and  have an overall understanding of the Reminds holistic approach to learning difficulties.",
            instructor: " University of Colorado System",
            image: "2.jpg"

        },
        {
            id: 3,
            name: "Teaching Children with Visual Impairment: Creating Empowering Classrooms",

            description: "Recognizing that there are many different eye conditions and that each affects learning and behavior in children differently.Tools to create empowering classrooms where you can teach children with visual impairment in an inclusive, accessible, and attuned space. Identify ways of infusing the Expanded Core Curriculum into teaching and apply curriculum differentiation strategies.",
            instructor: "University of Cape Town",
            image: "3.jpg"
        },
        {
            id: 4,
            name: "Disability Inclusion in Education: Building Systems of Support",

            description: "To use disability inclusion principles to describe the support needs of learners with disabilities. To identify the systemic support structures available to teachers within the education system. To recognise the impairment specific support needs of learners with disabilities.",
            instructor: "University of Cape Town",
            image: "4n.png"
        },
        {
            id: 5,
            name: "Severe to Profound Intellectual Disability: Circles of Care and Education",

            description: "Empowering all the people who work in a team to care and educate children with severe to profound intellectual disability. Considering lifelong learning by exploring brain development, the learning process, and how to maximise the opportunities for learning.",
            instructor: "University of Cape Town",
            image: "5n.jpeg"
        },
        {
            id: 6,
            name: "Special Child Education for the Children with Disabilities ",

            description: "Information About Special Child and their teaching methods, Effects of Special Education, Different Examples of Special Child's Disabilities, Learning Disabilities, Communication Disorder, Emotional and Behavioral Disorder",
            instructor: "Farhat Tazeen",
            image: "6n.png"
        },
        {
            id: 7,
            name: "Teach Children with Learning Disabilities. A Practical Guide",

            description: "By the end of this program, you will: Have greater understanding of the neurobiology behind various learning difficulties,Be able to identify effective teaching methodologies for children with learning difficulties,Have an overall understanding of the Reminds' holistic approach to learning difficulties.",
            instructor: "Nadeen Shome",
            image: "7n.jpeg"
        },
        {
            id: 8,
            name: "Tracking the Academic Progress of Students with Disabilities ",

            description: "Gain the understanding of the importance of tracking academic progress for students with disabilities. Learn the different methods for tracking the academic progress of students with disabilities, Have an understanding of how to use data to make informed decisions about the student's education, Understand the requirements related to implementing an IEP for students with disabilities, Be able to implement and differentiate accomodation and modification.",
            instructor: "Farouk Hassan",
            image: "8.jpeg"
        },

    ];

    const openDialog = (product) => {
        setSelectedProduct(product);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <section className="text-gray-600 body-font bg-gray-200"> {/* Added bg-gray-200 for grey background */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {showAll
                        ? products.map(product => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden" onClick={() => openDialog(product)}>
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                                </a>
                                <div className="mt-4">

                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                    <p className="mt-1">{product.instructor}</p>
                                </div>
                            </div>
                        ))
                        : products.slice(0, 4).map(product => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden" onClick={() => openDialog(product)}>
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                                </a>
                                <div className="mt-4">

                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                    <p className="mt-1">{product.instructor}</p>
                                </div>
                            </div>
                        ))}
                </div>
                {!showAll && (
                    <div className="flex justify-center mt-8">
                        <button onClick={() => setShowAll(true)} className="text-white bg-greeen border-0 py-2 px-4 focus:outline-none hover:bg-greene-600 rounded">Show More</button>
                    </div>
                )}
                {showDialog && <ProductDialog product={selectedProduct} onClose={closeDialog} />}
            </div>
        </section>
    );
}

export default Courses;
