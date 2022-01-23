import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import ContactForm from './Contact';

function App() {
  const [categories] = useState([
    {
      name: 'something',
      description: 'description of something',
    },
    { name: 'projects', description: 'Projects I have worked on' },
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
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
