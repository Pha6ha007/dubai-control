const ProductRealitySection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
              Not a concept
            </p>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Built for real cleaning operations
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                CleanProof is an internal operational tool designed for how cleaning companies actually work.
              </p>
              <p>
                It focuses on one thing only: creating undeniable proof that work was completed — where, when, and how.
              </p>
              <p>
                No project management. No messaging. No complexity. It fits into your existing workflow without changing it.
              </p>
            </div>
          </div>
          
          {/* Placeholder for future product screenshot */}
          <div className="order-first md:order-last">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  Product interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRealitySection;
