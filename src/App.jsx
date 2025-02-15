import "./App.css";
import { Navbar,Hero,Stats,Business,CardDeal,Testimonials,Clients,CTA,Footer, Billing, } from "./components";
import styles from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
          <div className={`${styles.boxWidth} text-white`} >
                <Navbar/>
          </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
