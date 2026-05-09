import "./NameDisplay.css"
export default function NameDisplay({ userName, textColor }) {
  return (
    <div>
      <h2>
        Hello World, I am{" "}
        <span className="h2" >
          {userName}
        </span>
      </h2>

      <p>
        I am doing B. Tech (CSE) in specialization with Artificial
        Intelligence and Machine Learning from Maharishi
        Markandeshwar (Deemed to be University)
      </p>
    </div>
  );
}