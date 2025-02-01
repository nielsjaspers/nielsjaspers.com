import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../components/Footer';
import './Blog.css';

function BlogTest() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blogs');
    };

    return (
        <div className="blogpost">
            <button className="back-button" onClick={handleClick}>
                <FaArrowLeft />
                Back
            </button>
            <h2>
                What I Wish I Knew When I Got Into Computer Science.
            </h2>
            <p className='small'>
                Niels Jaspers • January 6, 2025
            </p>
            <hr />
            <p>
                When I first decided to study Computer Science, I really had no idea what to expect. I got into this field with the mindset of "I like computers, so maybe this is something for me". I also tried to make games during the pandemic, but never had the motivation or willpower to actually finish one. As I learned more about the field, I got more excited about the potentials - I imagined making cool projects, learning how to solve complex real-world problems. But when I entered my first year, I quickly realised that the reality of studying CS was a lot different than I had imagined.
            </p>
            <p>
                Instead of actually diving into hands-on practical coding projects, I found myself buried in a mess of badly formulated classes about language syntax, unprofessional teachers and a lot of repetition of basic concepts like variables and loops.
            </p>
            <p>
                Our first and second year got divided into 4 parts, where each part has a focus on a different subject. For example, the first part of the first year, we did Game Development in C# using WPF to teach the basic concepts of programming, and for the second part we had to program an Arduino to automate a task.
                <br />
                Sure, all of this helped me learn a lot of fundamentals, but I struggled to see how they would actually help me create things.
            </p>
            <hr />
            <h3>
                From Convenience to Incompetence
            </h3>
            <p>
                After I’d pushed past the frustration of the early courses, I was eager for the second year. We were told that we’d be diving deeper into Java, focusing more on real-world applications, and leaving behind the repetition of basic concepts like syntax and loops. The promise was clear: we’d be refining our skills, no longer spending time on things we had already covered.
            </p>
            <p>
                But when the first lessons of the second year rolled around, it became apparent that things weren’t as smooth as promised. To my surprise, many of my peers - despite having been through a full year of foundational classes - had forgotten the basics. I mean, we were going back to variables, loops, and syntax once again, almost as if we hadn’t done it all before. It was clear that, despite all the opportunities to practice and learn, the majority of the class hadn’t actually internalized any of the material. What became even more striking to me was how many of my classmates relied on AI tools like GitHub Copilot to do their work. Instead of truly grappling with the concepts, they leaned on these tools, often missing the essential learning process that comes from writing code from scratch and solving problems independently.
            </p>
            <p>
                To be completely honest, I was part of that crowd, letting tools like ChatGPT and Copilot guide me through assignments. But I realized that relying on these shortcuts was eroding my own understanding. I wasn't learning to problem-solve in a meaningful way. So, I made the conscious decision to stop using AI tools and began putting in the work to learn and code on my own. This was when I began to see the real value in struggling through problems — because that's where true learning happens. The process of working through something difficult, failing, and finally understanding is where the real growth takes place.
            </p>
            <p>
                Looking around at my peers, it became clear: without putting in the effort, tools like Copilot were just making it easier to avoid truly learning. Many students, it seemed, were simply going through the motions, relying on technology to fill the gaps that their understanding couldn't. It was like a shortcut to getting through assignments but not to actually learning how to code.
                <br />
                And yes, my peers could move much faster than me on small tasks. But when we have to do something even a bit more complex, they get stuck because the AI tools can't help them.
            </p>
            <p>
                That realization made me grateful for the decision to stop relying on AI. It helped me focus on building a solid foundation, and though it was harder at times, it was ultimately more rewarding.
            </p>
            <hr />
            <h3>
                What I Wish I Had Focused On
            </h3>

            <p>
                Looking back, I realize that I could have been a lot more competent by now if I had just put in the effort from the beginning. There were so many opportunities to build a solid foundation, but I often chose the easier path - relying on AI tools, copying solutions from tutorials, or skipping over concepts I thought I could "get away with." In hindsight, I really wish I had taken the time to dive deeper into key concepts like Data Structures and Algorithms, which to my surprise have not even been taught in our classes as of writing.
            </p>

            <p>
                Another thing I regret is not making more projects. I didn’t realize how much I could learn by simply building things myself. Projects are the best way to put theory into practice, and I missed countless opportunities to experiment and create. I now understand that programming isn’t just about knowing syntax or how to use certain libraries - it’s about solving problems, being creative, and pushing through challenges. I also wish I had taken more initiative in asking questions and seeking a deeper understanding of the material. It was easy to coast by and do the bare minimum, but I now see how much more I could have learned if I had just been more curious, more engaged, and more proactive in getting answers. The more I ask questions now, the more I realize how much I missed out on by not doing it sooner.
            </p>

            <p>
                However, I'm genuinely glad that I’ve come to this realization now, even if it took longer than I would have liked. At least I’m finally on the right track. I’m pushing myself to learn independently, to build projects in my free time, and to solve problems without relying on shortcuts or tutorials. There's something incredibly rewarding about learning to code on your own, figuring things out through trial and error.
                <br />
                And the best part? It's fun. It’s so much more fulfilling to create something from scratch when you know what you’re doing. I’m finally starting to feel like I can actually build things - not just follow instructions - and that’s an amazing feeling.
            </p>

            <p>
                I’m not exactly where I want to be yet, but I’m getting there. Every project I complete, every concept I learn, feels like a small victory. The more I learn, the more I realize that this is what I enjoy doing; creating, building and problem-solving. Now, when I make something in my free time, it’s not just because I can. It’s because I want to, and because I’m excited to see how far I can push myself. And that, to me, is the real reward of actually building things.
            </p>
            <hr />
            <h3>
                What I Would Advise New Students
            </h3>
            <p>
                Start small, but build real projects. You don't have to wait until you've mastered every theoretical concept, or when you get an assignment to make something. Just start building.
                <br />
                Begin with simple projects - whether it is creating a personal website, automating a tedious task, making a game, or even something you're just interested in. The key is to build. The more you create, the faster you will learn.
                <br />
                These projects don't need to be perfect; in fact, they'll probably be messy. But the process of figuring out how to make something real will teach you far more than any textbook exercise.
            </p>
            <p>
                Also, seeking out resources and learning where to find them is an incredibly valuable skill. This can be as simple as asking teachers during or after class about topics you’ve covered. Never be afraid to ask questions or to seek clarification - teachers are there to help you (most of the time), and often they can point you toward resources you might not have considered. But even beyond the classroom, the learning doesn’t and shouldn't stop. In fact, what you learn in school is often just the tip of the iceberg.
            </p>
            <hr />
            <h3>
                Take Action
            </h3>
            <p>
                Looking back on everything I’ve learned so far (and wish I’d learned earlier), I’m actively working to fill in the gaps. I’ve started building my own side projects and try to learn something new every day. Additionally, I’ve decided to start this blog as a way to document my progress and share what I’ve learned along the way.
            </p>
            <p>
                Focus on building real projects, push yourself to learn independently, and don’t be afraid to dive deep into the technical concepts that will ultimately help you become a stronger problem-solver.
                It’s a journey, and it’s never too late to start honing the skills that will make you successful. Keep learning, keep building, and know that the work you’re putting in now will pay off in the long run.
            </p>
            <Footer />
        </div>
    );
}

export default BlogTest;

