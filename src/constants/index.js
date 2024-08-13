import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Computer Science and Engineering student specializing in Data Science, currently studying at ABES Engineering College, Ghaziabad. I have hands-on experience in Python, SQL, Java, C/C++, and JavaScript, along with proficiency in cloud computing, data science, and machine learning. My projects, such as an Ayurvedic disease detection app and a movie recommendation system, showcase my ability to apply machine learning to practical, real-world scenarios.`;

export const ABOUT_TEXT = `I am committed to continuous learning and problem-solving. I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality, data-driven solutions. Outside of my studies, I stay engaged with emerging technologies and contribute to open-source projects, always eager to innovate and make a meaningful impact in the tech industry.`;

export const PROJECTS = [
  {
    title: "Ayurvedic Agency",
    image: project1,
    link: "https://ayurvedicagency-l7aevjq4gb24wxamvidsua.streamlit.app/",
    description:
      "A web application that uses machine learning algorithms to detect diseases from symptoms and recommend Ayurvedic medicine. The application uses two machine learning models, both of which uses decision tree algorithms.",
    technologies: ["Python", "Data Science", "Machine Learning"],
  },
  {
    title: "Movie Flix",
    image: project2,
    link: "https://github.com/AshishSharma0007/movie_recommender",
    description:
      "A web Application that uses machine learning algorithms to recommend movies to users using recommendation models (content Based and Collaborative Filtering) both of which uses cosine similarity algorithms.",
    technologies: ["Python", "Data Science", "Machine Learning"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:"#",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "MedEase AI 1.0",
    image: project4,
    link: "https://github.com/AshishSharma0007/MedEaseAI1.0",
    description:
      "Programmed and deployed a MCQ generator Web-based Application using LLM, Langchain, achieving 99% accuracy on the test set and 80% accuracy on the current datasets available.",
    technologies: ["Python", "LLM", "LangChain", "Machine Learning"],
  },
];

export const CONTACT = {
  address: "B-430, New Panchwati, G.T. Road, Gzb, 201001",
  phoneNo: "+91 8130839083",
  email: "ashish.21b1541032@abes.ac.in",
};
