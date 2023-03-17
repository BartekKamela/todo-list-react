import "./style.css";

const Section = ({title, content, extraHeaderContent}) => (
    <section className="section">
        <header className="section__header section__header--modifier">
          <h3 className="section__headerTitle">{title}</h3>
          {extraHeaderContent}
        </header>
        <div className="section__content">
          {content}
        </div>
      </section>
);

export default Section;