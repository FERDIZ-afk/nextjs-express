// not-found.tsx

// Import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';

// Import hooks
import useMounted from 'hooks/useMounted';
import { Fragment } from 'react';

const NotFound: React.FC = () => {
  const hasMounted = useMounted();
  return (
    <Fragment>
      {hasMounted &&
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
          <Row className="text-center">
            <Col sm={12}>
              <div className="notfound">
                <div className="notfound-404">
                  <h1>404</h1>
                </div>
                <h2>Sorry sis, page not found!!</h2>
                <p>The page you are looking for may have been deleted, the name has been changed, or is currently unavailable.</p>
                <Link href="/" passHref>
                  <a className="btn btn-primary">Kembali ke halaman dashboard</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </Fragment>
  );
};

export default NotFound;
