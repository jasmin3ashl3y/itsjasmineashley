import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import ContactForm from './Contact';
import Footer from './Footer';
import './index.css';

function App() {
  const [categories] = useState([
    {
      name: 'about me',
      description: 'I am a Toronto based Web Developer that is most interested in Front-End, but am recently somewhat well-versed in Full-Stack. Contact me for further questions about what I can do! ',
    },
    { name: 'projects', description: 'Projects I have worked on.' },
    { name: 'stuff', description: 'Random words' },
    { name: 'things', description: 'Dogs, cats, birds, bees.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <Header></Header>
      <main>
        {!contactSelected ? (
          <>
          <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
