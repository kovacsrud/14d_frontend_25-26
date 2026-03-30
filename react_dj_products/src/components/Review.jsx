function Review({ review }) {
  return (
    <div>
      <div className="m-2 bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_32px_rgba(25,28,30,0.06)] flex flex-col h-full border border-outline-variant/15">
        <div className="flex items-center gap-1 mb-4">
          {/*<span
            className="material-symbols-outlined text-surface-tint text-xl"
            style="font-variation-settings: 'FILL' 1;"
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-surface-tint text-xl"
            style="font-variation-settings: 'FILL' 1;"
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-surface-tint text-xl"
            style="font-variation-settings: 'FILL' 1;"
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-surface-tint text-xl"
            style="font-variation-settings: 'FILL' 1;"
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-surface-tint text-xl"
            style="font-variation-settings: 'FILL' 1;"
          >
            star
          </span>*/}
          {review.rating}
        </div>
        <p className="font-body text-on-surface text-base leading-relaxed mb-8 italic">
          {review.comment}
        </p>
        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold">
              {/* monogram */}
            </div>
            <div>
              <p className="font-headline text-sm font-bold text-on-surface">
                {review.reviewerName}
              </p>
              <p className="font-label text-xs text-on-surface-variant">
                {review.date}
              </p>
            </div>
          </div>
          <p className="mt-3 font-label text-[10px] tracking-wider text-outline uppercase">
            {review.reviewerEmail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
