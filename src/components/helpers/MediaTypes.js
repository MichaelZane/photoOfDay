import Image from 'react-bootstrap/Image'

export const MediaTypes = ({media_type, title, url, hdurl}) => {
    switch(media_type) {
      case("video"):
        return (
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              title={title}
              allowFullScreen
              frameBorder="0"
              height="500"
              width="700"
              src={url}
            ></iframe>
          </div>
        )
      case("image"):
        return (

            <a href={hdurl} className="astronomy-wrapper">
              <Image className="img" src={url} alt={title} />
            </a>
          
        )
      default:
        return null
    }
  }