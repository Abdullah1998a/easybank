import {
  Navbar,
  Header,
  WhyEasybank,
  LatestArticles,
  Footer,
} from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <WhyEasybank />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}
