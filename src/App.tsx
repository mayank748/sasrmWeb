import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import './App.css';

const Header = () => (
  <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-3xl font-bold">SASRM</h1>
    <nav className="space-x-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/firms" className="hover:underline">Firms</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-8">
    <p>&copy; {new Date().getFullYear()} SASRM. All rights reserved.</p>
  </footer>
);

const Home = () => (
  <section className="p-8 text-center">
    <h2 className="text-4xl font-bold mb-4">Welcome to SASRM</h2>
    <p className="text-lg text-gray-700 mb-6">The global organization overseeing every firm operating in the world.</p>
    <Button className="text-lg">Explore Now</Button>
  </section>
);

const About = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-4">About SASRM</h2>
    <p className="text-gray-700">SASRM is the central authority managing, regulating, and supporting all operational firms globally. Our mission is to unify innovation, promote global standards, and ensure ethical progress.</p>
  </section>
);

const Firms = () => (
  <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <Card key={i} className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">Firm #{i + 1}</h3>
          <p className="text-sm text-gray-600">Global presence. Trusted operations. SASRM governed.</p>
        </CardContent>
      </Card>
    ))}
  </section>
);

const Contact = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
    <form className="space-y-4 max-w-md">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Message" className="w-full p-2 border rounded h-32" />
      <Button>Send Message</Button>
    </form>
  </section>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/firms" element={<Firms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
