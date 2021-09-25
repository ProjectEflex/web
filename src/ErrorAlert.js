import { Alert } from 'react-bootstrap';

export default function ErrorAlert({ errorMsg }) {
    return errorMsg ? (
        <Alert variant="danger" className="m-2">
        { errorMsg }
        </Alert>
    ) : null
}