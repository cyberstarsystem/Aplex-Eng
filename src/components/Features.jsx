import misc6 from '../assets/img/misc/misc-square-6.webp'
import misc13 from '../assets/img/misc/misc-square-13.webp'
import misc3 from '../assets/img/misc/misc-square-3.webp'
import misc5 from '../assets/img/misc/misc-square-5.webp'

const featureTabs = [
  {
    id: 'features-tab-1',
    icon: 'bi-people',
    title: 'Vestibulum ante ipsum',
    subtitle: 'Proin iaculis purus consequat',
    heading: 'Nullam Lacinia Consectetur',
    p1: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    p2: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    list: [
      'Curabitur aliquet quam id dui posuere blandit',
      'Nulla quis lorem ut libero malesuada feugiat',
      'Vestibulum ac diam sit amet quam vehicula',
      'Donec rutrum congue leo eget malesuada',
    ],
    img: misc6,
  },
  {
    id: 'features-tab-2',
    icon: 'bi-heart',
    title: 'Curabitur aliquet quam',
    subtitle: 'Nulla quis lorem ut libero',
    heading: 'Sed Porttitor Lectus Nibh',
    p1: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus.',
    p2: 'Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.',
    list: [
      'Vivamus suscipit tortor eget felis porttitor',
      'Curabitur aliquet quam id dui posuere',
      'Nulla quis lorem ut libero malesuada',
      'Vestibulum ac diam sit amet quam',
    ],
    img: misc13,
  },
  {
    id: 'features-tab-3',
    icon: 'bi-house-heart',
    title: 'Luna stride flared',
    subtitle: 'Sed ut perspiciatis unde omnis',
    heading: 'Praesent Sapien Massa',
    p1: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    p2: 'Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    list: [
      'Curabitur non nulla sit amet nisl',
      'Vestibulum ac diam sit amet quam',
      'Donec rutrum congue leo eget',
      'Nulla quis lorem ut libero',
    ],
    img: misc3,
  },
  {
    id: 'features-tab-4',
    icon: 'bi-person-heart',
    title: 'Quisque Velit Nisi',
    subtitle: 'Duis aute irure dolor in',
    heading: 'Curabitur Aliquet Quam',
    p1: 'Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.',
    p2: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus.',
    list: [
      'Nulla quis lorem ut libero malesuada',
      'Curabitur aliquet quam id dui',
      'Vestibulum ac diam sit amet',
      'Donec rutrum congue leo',
    ],
    img: misc5,
  },
  {
    id: 'features-tab-5',
    icon: 'bi-briefcase',
    title: 'Curabitur Aliquet',
    subtitle: 'Excepteur sint occaecat cupidatat',
    heading: 'Vestibulum Ante Ipsum',
    p1: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
    p2: 'Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    list: [
      'Vivamus suscipit tortor eget felis',
      'Curabitur aliquet quam id dui',
      'Nulla quis lorem ut libero',
      'Vestibulum ac diam sit amet',
    ],
    img: misc3,
  },
]

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <ul className="nav nav-tabs flex-column" role="tablist">
              {featureTabs.map((tab, i) => (
                <li key={tab.id} className="nav-item">
                  <a
                    className={`nav-link ${i === 0 ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    href={`#${tab.id}`}
                    role="tab"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon-box">
                        <i className={`bi ${tab.icon}`}></i>
                      </div>
                      <div className="ms-3">
                        <h4>{tab.title}</h4>
                        <p>{tab.subtitle}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content">
              {featureTabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${i === 0 ? 'active show' : ''}`}
                  id={tab.id}
                  role="tabpanel"
                >
                  <div className="content-box">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <h3>{tab.heading}</h3>
                        <p>{tab.p1}</p>
                        <p className="highlight">{tab.p2}</p>
                        <ul className="features-list">
                          {tab.list.map((item, j) => (
                            <li key={j}>
                              <i className="bi bi-check2-circle"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <div className="image-box">
                          <img src={tab.img} alt="" className="img-fluid" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
