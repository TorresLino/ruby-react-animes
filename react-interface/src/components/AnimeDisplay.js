import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup'

const STATUS_BADGE_COLORS = 
{
    1: 'primary', 2:'success', 3:'warning', 4:'secondary'
}

const AnimeDisplay = ({ anime, statuses }) => {
    var status = statuses.find(s => s.getId() == anime.getStatusId())
  return (
    <div>
        <Card body>
            <Container fluid className='text-start'>
                <Row className='mb-3'>
                    <Col sm={8}>
                        <strong className='h5'>{anime.getTitle() }</strong>
                        
                        <Badge bg={STATUS_BADGE_COLORS[status.getId()]} className='mx-3'>
                            {status.getName()}
                        </Badge>
                    </Col>
                    <Col sm={4}  className='text-end'>
                        {anime.getPremiered()}
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        {anime.getDescription()}
                    </Col>
                    <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item>Episodes: {anime.getEpisodes()}</ListGroup.Item>
                            <ListGroup.Item>Episode duration: {anime.getEpisodeDuration()} min</ListGroup.Item>
                            <ListGroup.Item>Rating: {anime.getRating()}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Card>
    </div>
  )
}

export default AnimeDisplay