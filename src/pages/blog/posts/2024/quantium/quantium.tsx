import { Post } from '../../../../../components/blog/Post';

export class Quantium extends Post {
  public name = 'Internship at Quantium';
  public slug = 'quantium';
  public date = new Date('6 Jan 2024');
  public hidden = false;
  public excerpt =
    'My experience as a data analyst intern at Quantium, working on retail analytics projects.';
  public keywords = [
    'Quantium',
    'internship',
    'data analyst',
    'retail analytics',
    'Python',
    'Jupyter Notebook',
    'Power BI',
  ];
  public render() {
    return (
      <>
        <h1>Internship at Quantium</h1>
        <p>
          This summer, I worked on an exciting journey as a data analyst intern
          at Quantium. The internship was structured around a project-based
          approach, allowing me to dive deep into real-world retail analytics
          challenges.
        </p>

        <h2>First Steps: Onboarding and Initial Training</h2>
        <p>
          The internship began with an intensive onboarding process. I was
          introduced to the company's tools and methodologies, which included
          Python, Jupyter Notebook, and Power BI. The initial training sessions
          were instrumental in getting me up to speed with the data analysis
          techniques used at Quantium.
        </p>

        <h2>Data Preparation and Customer Analysis</h2>
        <p>
          My first task was to analyze customer purchasing trends to support a
          strategic recommendation for a category review. Here’s a glimpse into
          my workflow:
        </p>
        <ol>
          <li>
            <strong>Data Checks:</strong> Conducting data summaries, removing
            outliers, and correcting formats to ensure data integrity.
          </li>
          <li>
            <strong>Feature Engineering:</strong> Deriving new features such as
            pack size and brand name from the product descriptions.
          </li>
          <li>
            <strong>Customer Segmentation:</strong> Defining metrics to
            understand different customer segments and their spending behavior.
          </li>
        </ol>
        <iframe src="https://nbviewer.org/github/muhammad-zulfikar/quantium/blob/main/Task%201%20-%20Data%20Preparation%20and%20Customer%20Analysis.ipynb"></iframe>

        <h2>Experimentation and Uplift Testing</h2>
        <p>
          The second task involved evaluating a store trial for stores 77, 86,
          and 88. This required detailed analysis to determine the effectiveness
          of the trial. Key steps included:
        </p>
        <ul>
          <li>
            Analyzing monthly sales data: total sales revenue, customer count,
            and average transactions per customer.
          </li>
          <li>
            Creating a measure to compare trial stores with control stores.
          </li>
          <li>
            Performing statistical tests to determine the significance of the
            results.
          </li>
        </ul>
        <iframe src="https://nbviewer.org/github/muhammad-zulfikar/quantium/blob/main/Task%202%20-%20Experimentation%20and%20Uplift%20Testing.ipynb"></iframe>

        <h2>Analytics and Commercial Application</h2>
        <p>
          The final task was to generate insights and visualizations from
          transaction data and present actionable recommendations. This
          involved:
        </p>
        <ul>
          <li>
            Using the output from previous tasks to create comprehensive charts
            and visualizations.
          </li>
          <li>
            Developing a Power BI report that highlighted key insights and
            recommendations for the client.
          </li>
        </ul>
        <iframe src="https://muhammad-zulfikar.github.io/files/documents/projects/quantium/Task%203%20-%20Analytics%20and%20Commercial%20Application%20(2).pdf"></iframe>
      </>
    );
  }
}

const InternshipAtQuantiumPage = () => {
  const post = new Quantium();
  return post.render();
};

export default InternshipAtQuantiumPage;
