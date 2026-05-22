"use client";

import FlipCard from "../components/FlipCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-purple-400">
            Spandana
          </h1>

          <div className="flex gap-8 text-gray-300">

            <a href="#contact" className="hover:text-purple-400">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">

        <h1 className="text-6xl font-bold mb-4">
          Shobhitha Spandana S
        </h1>

        <h2 className="text-2xl text-purple-400 mb-6">
          Software Developer | AI Enthusiast
        </h2>

        <p className="max-w-2xl text-gray-300 text-lg">
          Passionate about building intelligent, scalable, and user focused
          applications using Artificial Intelligence, Machine Learning,
          and modern web technologies.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="#experience"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="bg-slate-800 border border-purple-500 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="bg-slate-800 border border-purple-500 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
          >
            Skills
          </a>

          <a
            href="#certifications"
            className="bg-slate-800 border border-purple-500 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
          >
            Certifications
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-slate-800 border border-cyan-400 hover:bg-cyan-600 px-6 py-3 rounded-xl transition"
          >
            Download Resume
          </a>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-screen px-10 py-20 bg-slate-900"
      >

        <h1 className="text-5xl font-bold text-center mb-16">
          Experience
        </h1>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <FlipCard
            frontTitle="AI with Cloud Computing Intern"
            frontSubtitle="SuprMentr Technologies"

            backContent={
              <div className="space-y-4 text-sm">

                <p>
                  • Developed AI powered Code Assistant using Streamlit and Groq API.
                </p>

                <p>
                  • Integrated LLaMA 3.1 for intelligent code generation and debugging.
                </p>

                <p>
                  • Implemented real time Python code execution environment.
                </p>

                <p>
                  • Applied Prompt Engineering for optimized AI responses.
                </p>

                <p>
                  • Designed responsive UI for interactive AI workflows.
                </p>

                <p>
                  • Improved debugging efficiency using Generative AI techniques.
                </p>

              </div>
            }
          />

          <FlipCard
            frontTitle="Data Science Intern"
            frontSubtitle="Skill Intern"

            backContent={
              <div className="space-y-4 text-sm">

                <p>
                  • Processed and cleaned 50,000+ Uber ride records.
                </p>

                <p>
                  • Built clustering and regression models.
                </p>

                <p>
                  • Improved ETA prediction and routing efficiency.
                </p>

                <p>
                  • Visualized customer demand patterns.
                </p>

                <p>
                  • Performed exploratory data analysis using Python.
                </p>

                <p>
                  • Generated business insights using machine learning.
                </p>

              </div>
            }
          />

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-10 py-20 bg-slate-950"
      >

        <h1 className="text-5xl font-bold text-center mb-16">
          Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <FlipCard
            frontTitle="LUNA AI"
            frontSubtitle="Major Project"

            backContent={
              <div className="space-y-4 text-sm">

                <p>
                  • AI powered multimedia understanding platform.
                </p>

                <p>
                  • Integrated YOLO, OCR, Whisper, and NLP models.
                </p>

                <p>
                  • Real time video processing and analytics.
                </p>

                <a
                  href="https://github.com/SpandanaS28"
                  target="_blank"
                  className="bg-white text-black px-4 py-2 rounded-xl inline-block"
                >
                  View GitHub
                </a>

              </div>
            }
          />

          <FlipCard
            frontTitle="Manufacturing Prediction"
            frontSubtitle="Self Developed Project"

            backContent={
              <div className="space-y-4 text-sm">

                <p>
                  • Built ML prediction system for manufacturing data.
                </p>

                <p>
                  • Compared Random Forest and SVM models.
                </p>

                <p>
                  • Deployed using FastAPI and Docker.
                </p>

                <a
                  href="https://github.com/SpandanaS28"
                  target="_blank"
                  className="bg-white text-black px-4 py-2 rounded-xl inline-block"
                >
                  View GitHub
                </a>

              </div>
            }
          />

          <FlipCard
            frontTitle="Heart Disease Detection"
            frontSubtitle="Self Developed Project"

            backContent={
              <div className="space-y-4 text-sm">

                <p>
                  • Developed ML disease prediction system.
                </p>

                <p>
                  • Applied preprocessing and feature engineering.
                </p>

                <p>
                  • Deployed with FastAPI backend.
                </p>

                <a
                  href="https://github.com/SpandanaS28"
                  target="_blank"
                  className="bg-white text-black px-4 py-2 rounded-xl inline-block"
                >
                  View GitHub
                </a>

              </div>
            }
          />

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen px-10 py-20 bg-slate-900"
      >

        <h1 className="text-5xl font-bold text-center mb-16">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <FlipCard
            frontTitle="Programming Languages"
            frontSubtitle="Core coding skills"

            backContent={
              <div className="space-y-2 text-center">
                <p>Python</p>
                <p>Java</p>
                <p>JavaScript</p>
                <p>C</p>
                <p>C++</p>
              </div>
            }
          />

          <FlipCard
            frontTitle="Web Technologies"
            frontSubtitle="Frontend & APIs"

            backContent={
              <div className="space-y-2 text-center">
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Next.js</p>
                <p>REST APIs</p>
              </div>
            }
          />

          <FlipCard
            frontTitle="AI Tools"
            frontSubtitle="Artificial Intelligence"

            backContent={
              <div className="space-y-2 text-center">
                <p>Groq API</p>
                <p>LLaMA 3.1</p>
                <p>Prompt Engineering</p>
                <p>Whisper AI</p>
                <p>OpenAI</p>
              </div>
            }
          />

          <FlipCard
            frontTitle="Machine Learning"
            frontSubtitle="ML Technologies"

            backContent={
              <div className="space-y-2 text-center">
                <p>Scikit Learn</p>
                <p>Regression</p>
                <p>Classification</p>
                <p>Clustering</p>
                <p>Data Analysis</p>
              </div>
            }
          />

          <FlipCard
            frontTitle="Frameworks & Tools"
            frontSubtitle="Developer Stack"

            backContent={
              <div className="space-y-2 text-center">
                <p>Docker</p>
                <p>GitHub</p>
                <p>FastAPI</p>
                <p>Streamlit</p>
                <p>VS Code</p>
              </div>
            }
          />

          <FlipCard
            frontTitle="Cloud & Databases"
            frontSubtitle="Storage & Cloud"

            backContent={
              <div className="space-y-2 text-center">
                <p>Cloud Computing</p>
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>Firebase</p>
                <p>SQL</p>
              </div>
            }
          />

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="min-h-screen px-10 py-20 bg-slate-950"
      >

        <h1 className="text-5xl font-bold text-center mb-16">
          Certifications
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <FlipCard
            frontTitle="Getting Started with Artificial Intelligence"
            frontSubtitle="IBM SkillsBuild"

            backContent={
              <a
                href="https://www.credly.com/badges/76fbe305-3d61-4088-ae6b-5b4255c0e10e/public_url"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-xl inline-block"
              >
                View Credential
              </a>
            }
          />

          <FlipCard
            frontTitle="Artificial Intelligence Fundamentals"
            frontSubtitle="IBM SkillsBuild"

            backContent={
              <a
                href="https://www.credly.com/badges/194e68ae-936a-480a-a860-696f6c22b4e2/public_url"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-xl inline-block"
              >
                View Credential
              </a>
            }
          />

          <FlipCard
            frontTitle="Cybersecurity Fundamentals"
            frontSubtitle="IBM SkillsBuild"

            backContent={
              <a
                href="https://www.credly.com/badges/b4e72b14-d297-496e-b12b-586d1eb066e3/public_url"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-xl inline-block"
              >
                View Credential
              </a>
            }
          />

          <FlipCard
            frontTitle="Generative AI in Action"
            frontSubtitle="IBM SkillsBuild"

            backContent={
              <a
                href="https://www.credly.com/badges/7922182a-7f71-45e1-9bd6-4cac5409f883/public_url"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-xl inline-block"
              >
                View Credential
              </a>
            }
          />

          <FlipCard
            frontTitle="Artificial Intelligence & Machine Learning Foundations"
            frontSubtitle="TNS Foundation"

            backContent={
              <div className="text-center">
                TNS Foundation Certification
              </div>
            }
          />

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-slate-900 px-10 py-20"
      >

        <h1 className="text-5xl font-bold text-center mb-16">
          Contact
        </h1>

        <div className="max-w-4xl mx-auto bg-slate-800 p-10 rounded-3xl shadow-2xl">

          <div className="space-y-8 text-lg text-gray-300">

            {/* EMAIL */}
            <div className="flex items-center gap-4">

              <span className="text-3xl">📧</span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=spanduspandu1828@gmail.com"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                spanduspandu1828@gmail.com
              </a>

            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4">

              <span className="text-3xl">📱</span>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("+916360391879");
                  alert("Phone number copied!");
                }}
                className="text-cyan-400 hover:underline"
              >
                +91 6360391879
              </button>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-10 pt-4">

              <a
                href="https://github.com/SpandanaS28"
                target="_blank"
                className="flex items-center gap-3 hover:scale-110 transition"
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="w-12 h-12 rounded-full bg-white p-2"
                />

                <span className="text-cyan-400">
                  GitHub
                </span>

              </a>

              <a
                href="https://www.linkedin.com/in/spandana-s-646a9126b"
                target="_blank"
                className="flex items-center gap-3 hover:scale-110 transition"
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-12 h-12"
                />

                <span className="text-cyan-400">
                  LinkedIn
                </span>

              </a>

            </div>

            {/* MESSAGE FORM */}
            <form
              action="https://formsubmit.co/spanduspandu1828@gmail.com"
              method="POST"
              className="space-y-6 pt-6"
            >

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message!"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-700 rounded-xl p-4 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-700 rounded-xl p-4 outline-none"
              />

              <textarea
                name="message"
                placeholder="Drop me a message..."
                required
                className="w-full h-40 bg-slate-700 rounded-2xl p-6 resize-none outline-none"
              />

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-2xl text-lg font-semibold transition hover:scale-105"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}