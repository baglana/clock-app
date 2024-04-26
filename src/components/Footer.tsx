import "../styles/Footer.css";

export default function Footer({ time }) {
  return (
    <footer id="footer">
      <section>
        <h2>Current timezone</h2>
        <p>Europe/London</p>
      </section>
      <section>
        <h2>Day of the year</h2>
        <p>{time.day_of_year}</p>
      </section>
      <section>
        <h2>Day of the week</h2>
        <p>{time.day_of_week}</p>
      </section>
      <section>
        <h2>Week number</h2>
        <p>{}</p>
      </section>
    </footer>
  );
}
