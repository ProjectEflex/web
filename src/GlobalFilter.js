import { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

export default function GlobalFilter({
    onSearch
}) {

    const [query, setQuery] = useState('');

    function onReset() {
        setQuery("");
        onSearch("");
    }

    return (
        <div className="border rounded p-2">
            <Row className="align-items-end">
                <Col sm={12} lg={4}>
                    <FormControl
                        className="mb-1"
                        placeholder="Search by config key to filter"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                </Col>
                <Col sm={12} lg={4}>
                    <Button
                        size="sm"
                        variant="outline-primary"
                        className="mb-1"
                        onClick={() => onSearch(query)}
                    >
                        Search
                    </Button>
                    <Button
                        size="sm"
                        variant="outline-secondary"
                        className="ms-2 mb-1"
                        onClick={() => onReset()}
                    >
                        Reset
                    </Button>
                </Col>
            </Row>
        </div>
    )
}