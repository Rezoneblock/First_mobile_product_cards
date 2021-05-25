$(function () {
  for (item of $('.main__list__item')) {
    // Если времён больше 4
    if ($(item).find('.main__details__description__time-list').children().length > 4) {
      // Скрываем все времена начиная с 4 включительно.
      for (
        let i = 3;
        i < $(item).find('.main__details__description__time-list').children().length;
        i++
      ) {
        $(item)
          .find('.main__details__description__time-list')
          .children()
          [i].classList.add('main__details__description__time-list__link--hidden');
      }

      // Создаём кнопку "Ещё..." и ставим её ко всем временам.
      $('<span class="main__details__description__time-list__more">Ещё...</span>').appendTo(
        $(item).find('.main__details__description__time-list'),
      );
    }
  }

  // При клике на кнопку "Ещё...".
  $('.main__details__description__time-list__more').on('click', function () {
    // Скрываем саму кнопку "Ещё...".
    this.classList.add('main__details__description__time-list__link--hidden');

    // Находим все времена и удаляем у них скрывающий класс.
    $(this)
      .closest('.main__details__description__time-list')
      .find('.main__details__description__time-list__link')
      .removeClass('main__details__description__time-list__link--hidden');
  });
});
