import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"; 
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
    width: "300px",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();
  const [result, setResult] = useState("");
  const [question, setQuestion] = useState("");
  const [file, setFile] = useState(null);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    }
    if (question) {
      formData.append("question", question);
    }

    fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.result);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className={classes.form}>
      <Typography variant="h5" gutterBottom>
        File Upload Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          id="question"
          label="Question"
          variant="outlined"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask your question here"
        />
        <input
          type="file"
          id="file"
          name="file"
          accept=".csv,.txt,.docx,.pdf"
          onChange={handleFileChange}
          className={classes.input}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          disabled={!file || !question}
        >
          Submit
        </Button>
      </form>
      {result && <Typography variant="body1">Result: {result}</Typography>}
    </div>
  );
}