import { useState } from 'react'

const faqItems = [
  {
    question: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar?',
    answer:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  },
  {
    question: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem?',
    answer:
      'Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit.',
  },
  {
    question: 'Vestibulum ante ipsum primis in faucibus orci luctus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    question: 'Nulla facilisi morbi tempus iaculis urna id volutpat?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
  },
  {
    question: 'Praesent sapien massa, convallis a pellentesque nec?',
    answer:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-wrapper">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className={`faq-item ${activeIndex === i ? 'faq-active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                >
                  <div className="faq-header">
                    <div className="faq-icon">
                      <i className="bi bi-question-circle"></i>
                    </div>
                    <h4>{item.question}</h4>
                    <div className="faq-toggle">
                      <i className="bi bi-plus"></i>
                      <i className="bi bi-dash"></i>
                    </div>
                  </div>
                  <div className="faq-content">
                    <div className="content-inner">
                      <p>{item.answer}</p>
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
