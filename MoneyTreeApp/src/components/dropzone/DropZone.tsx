import { useState, useRef } from "react";
import axios from "axios";
import "./dropzone.css";

const DropZone = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef<HTMLInputElement | null>(null); // 👈 NEW

    const handleFile = (file: File) => {
        if (file) {
            setSelectedFile(file);
        }
    };

    const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            handleFile(event.target.files[0]);
        }
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = () => {
        setIsDragging(false);
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const file = event.dataTransfer.files[0];
        handleFile(file);
    };

    const onFileUpload = () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("transactionsFile", selectedFile);

        axios
            .post("api/uploadedtransactions", formData)
            .then((res) => console.log("File Successfully Uploaded", res))
            .catch((err) => console.error("File Upload Failed", err));
    };

    return (
        <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            className={`drop-zone ${isDragging ? "dragging" : ""}`}
        >
            <p>Drag & drop a file here or click to upload</p>

            <input
                type="file"
                ref={fileInputRef}
                onChange={onFileSelected}
                style={{ display: "none" }}
            />

            <button
                onClick={() => {
                    if (!selectedFile) {
                        fileInputRef.current?.click(); // open file picker
                    } else {
                        onFileUpload(); // upload file
                    }
                }}
            >
                Choose File
            </button>

            {selectedFile && (
                <div>
                    <h3>File Selected:</h3>
                    <p>Name: {selectedFile.name}</p>
                    <p>Type: {selectedFile.type}</p>
                </div>
            )}
        </div>
    );
};

export default DropZone;