import { STOREFRONT_CUSTOMER_REVIEWS } from "@/lib/mocks/storefront-customer-reviews";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function ReviewStars({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div
      role="img"
      aria-label={`${clamped} out of 5 stars`}
      className="text-perfume-gold mb-2 text-sm tracking-tight"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < clamped ? "text-perfume-gold" : "text-perfume-ink-muted/25"
          }
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

/**
 * Customer review grid under featured products — mock copy from `storefront-customer-reviews`.
 */
export function StoreHomeCustomerReviews() {
  return (
    <section
      aria-labelledby="store-home-reviews-heading"
      className="w-full min-w-0 px-3 py-12 sm:px-6 md:py-16 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="store-home-reviews-heading"
            className="text-perfume-ink font-sans text-2xl font-extrabold tracking-tight md:text-3xl"
          >
            Customer reviews
          </h2>
          <p className="text-perfume-ink-muted mt-2 max-w-2xl text-sm font-medium text-pretty md:mx-auto md:text-base">
            What shoppers say about their finds—placeholder quotes until reviews
            are wired to your catalog.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STOREFRONT_CUSTOMER_REVIEWS.map((review) => (
            <li key={review.id}>
              <article className="flex h-full flex-col rounded-3xl border border-white/55 bg-white/22 p-5 shadow-rose-950/10 backdrop-blur-xl sm:p-6">
                <ReviewStars rating={review.rating} />
                <h3 className="text-perfume-ink mb-2 text-base leading-snug font-bold tracking-tight">
                  {review.title}
                </h3>
                <p className="text-perfume-body mb-4 flex-1 text-sm leading-relaxed">
                  {review.body}
                </p>
                <footer className="text-perfume-ink-muted mt-auto border-t border-white/40 pt-4 text-xs font-medium">
                  <cite className="text-perfume-ink font-semibold not-italic">
                    {review.authorName}
                  </cite>
                  <span aria-hidden> · </span>
                  <time dateTime={review.reviewDate}>
                    {dateFmt.format(new Date(review.reviewDate))}
                  </time>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
