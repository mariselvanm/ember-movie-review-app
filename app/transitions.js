export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('movie-review.index'),
      this.toRoute('movie-review.view'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
}
