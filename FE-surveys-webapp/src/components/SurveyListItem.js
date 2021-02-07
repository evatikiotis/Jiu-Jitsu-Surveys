import React from "react";
import Link from "next/link";

export default function SurveyListItem({ survey, index }) {
  const surveyId = survey.id;
  return (
    <>
      <tr>
        <th className="display-none-small-screen" scope="row">
          {index + 1}
        </th>
        <td>{survey.name}</td>
        <td>
          <Link href={`/surveys/${surveyId}`}>
            <a>Take the Survey</a>
          </Link>
        </td>
        <td>
          <a
            target="_blank"
            href={`https://docs.google.com/forms/d/${surveyId}/viewanalytics`}
          >
            View Survey Analytics
          </a>
        </td>
        <td>{survey.createdDate}</td>
      </tr>
    </>
  );
}
