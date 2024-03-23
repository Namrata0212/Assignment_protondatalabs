# Assignment_protondatalabs

The changes that I have incorporated includes:
#Frontend
1. Added the accept attribute to the file input element. The accept attribute is used to specify the types of files that the user can select in the file picker dialog. By setting the accept attribute to the acceptFileTypes array, the file picker dialog will only show files with the specified MIME types. The acceptFileTypes array includes the MIME types for CSV, text, PDF, and Word documents. This ensures that the user can only select files with these types, and not any other file type.
2. The handleFileChange function has been updated to show a success toast message using toast.success('File uploaded successfully!') when a file is successfully selected. This provides feedback to the user that the file has been uploaded correctly.
3. The resultOutput class has been added to the p element that displays the result, so that it can be styled using CSS.
 npm install react-toastify is used to install react-toastify that is used to notify the user when a file has been uploaded successfully.

#Backend
This code is a minimal, self-contained web app for file upload and prediction using a pre-trained model.
1. Define a Response Pydantic model to represent the API response structure.
2. Instantiated a pre-processing and training pipeline using ColumnTransformer and OneHotEncoder for categorical data encoding and joblib to load a pre-trained model.
3. Defined a /predict endpoint in the FastAPI app that accepts a file upload, pre-processes the data, makes a prediction using the pre-trained model, and returns a JSON response with the input data and predicted output.
