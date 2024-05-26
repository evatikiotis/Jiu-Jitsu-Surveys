import SurveyListItem from "../../components/SurveyListItem";

export default function SurveysList(props: any) {
  // eslint-disable-next-line react/prop-types
  const {surveys} = props;
  return (
    <>
      <div>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th className="display-none-small-screen" scope="col">
                {" "}
                #{" "}
              </th>
              <th scope="col"> Survey Name</th>
              <th scope="col"> Take the Survey</th>
              <th scope="col"> Survey Analytics</th>
              <th scope="col"> Created Date</th>
            </tr>
            </thead>
            <tbody>
            {surveys.map((survey: any, index: any) => (
              <SurveyListItem key={survey.id} survey={survey} index={index}/>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // TODO: url to be passed as environment variable
  // const res = await fetch("http://backend:8080/surveys");
  // const surveys = await res.json();
  // // By returning { props: posts }, the Blog component
  // // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     surveys,
  //   },
  // };
  
  return {props: {surveys: []}};

}
