import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Page/All';
import FullStack from './Page/FullStack';
import DataScience from './Page/DataScience';
import CyberSecurity from './Page/CyberSecurity';
import Career from './Page/Career';
import NotFound from './Page/NotFound';
import Navbar from './components/Navbar';

const App = () => {

    let data = [
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            head:"Full Stack Development",
            content:"Best Full-Stack Development Project Ideas in 2024",
            data:"19 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
            head:"Full Stack Development",
            content:"How Long Would It Take to Be a Full Stack Developer?",
            data:"21 May 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
            head:"Full Stack Development",
            content:"How does Apache work? A detailed introduction to Apache",
            data:"14 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            head:"Full Stack Development",
            content:"10 Best Database Management Systems For Software Developers",
            data:"01 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            head:"Full Stack Development",
            content:"Top 30 Mini Project Ideas For College Students [UPDATED]",
            data:"03 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
            head:"Data Science",
            content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            data:"10 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
            head:"Data Science",
            content:"12 Real-World Data Science Examples: Power Of Data Science",
            data:"10 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
            head:"Data Science",
            content:"Can A Commerce Student Do Data Science?",
            data:"12 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
            head:"Data Science",
            content:"Roles and Responsibilities of a Data Scientist",
            data:"15 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists-768x480.webp",
            head:"Data Science",
            content:"Top Product-Based Companies for Data Scientists in 2024",
            data:"20 Jun 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
            head:"Cyber Security",
            content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            data:"23 May 2024",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
            head:"Cyber Security",
            content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            data:"30 May 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
            head:"Cyber Security",
            content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            data:"10 May 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp",
            head:"Cyber Security",
            content:"What Is Hacking? Types of Hacking & More",
            data:"20 May 2024",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
            head:"Cyber Security",
            content:"8 Different Types of Cybersecurity and Threats Involved",
            data:"01 Feb 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
            head:"Cyber Security",
            content:"What is Cybersecurity? Importance and its uses & the growing challenge...",
            data:"01 Feb 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-Career-in-Motion-Graphics.webp",
            head:"Career",
            content:"Career in Motion Graphics: A Detailed Guide",
            data:"01 feb 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp",
            head:"Career",
            content:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
            data:"01 Feb 2024",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
            head:"Career",
            content:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
            data:"25 May 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-AWS-Data-Engineer-Comprehensive-Guide-to-Your-New-Career-.webp",
            head:"Career",
            content:"AWS Data Engineer: Comprehensive Guide to Your New Career [2024]",
            data:"06 May 24",
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career-1200x675.webp",
            head:"Career",
            content:"8 Mistakes To Avoid When You Begin a Data Science Career",
            data:"05 Feb 24",
        }, 
    ]
    return (
        <div>
            <BrowserRouter>
            <>
            <Navbar />
            </>
            <Routes>
                 <Route path='/' element={<All  data={data} />} />
                 <Route path='/Fullstack' element={<FullStack data={data} />} />
                 <Route path='/DataScience' element={<DataScience data={data} />} />
                 <Route path='/CyberSecurity' element={<CyberSecurity data={data} />} />
                 <Route path='/Career' element={<Career data={data} />} />
                 <Route path='*' element={<NotFound />} />
            </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;