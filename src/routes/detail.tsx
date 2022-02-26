import { useParams } from "react-router-dom";

export default function Detail() {
    let params = useParams()
    return (
      <p>detail for day {params.date}</p>
    );
  }