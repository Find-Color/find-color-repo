import { Form } from "react-bootstrap";
export default function Filter() {
  function handleFilter() {
    console.log(event.target.value);
  }
  return (
    <>
      <Form onChange={handleFilter}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Status</Form.Label>
          {["checkbox"].map((type) => (
            <>
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />
              </div>{" "}
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />
              </div>{" "}
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />
              </div>
            </>
          ))}

          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />
            </div>
          ))}
        </Form.Group>
      </Form>
    </>
  );
}
