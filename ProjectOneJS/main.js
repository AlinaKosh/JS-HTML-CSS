const questions = [
	{
		text: "Что вам важнее: наличие творчества или программирования?",
    arrA: [
      {
        text : 'Творчество',
        nextQ : 6,
        arr : [0, 4, 5, 6]
      },
      {
        text : 'Программирование',
        nextQ : 1,
        arr : [0, 1, 2, 3]
      }
    ]
		//answers: ["Творчество", "Программирование"],
	},







  {
		text: "Что тебе удобнее: очная или заочная форма обучения?",
    arrA: [
      {
      text: 'Очная',
      nextQ: 3,
      arr : []
    },
    {
      text: 'Заочная',
      nextQ: 2,
      arr: []
    }
    ]
		/*answers: [
			"Очная",
			"Заочная",
		],*/
	},
	{
		text: "Если вас заинтересовала ЗАОЧНАЯ форма, то вам больше по душе:",
    arrA: [
      {
      text: 'Администрирование операционных систем',//ивчт
      nextQ: -1,//на итоговую страницу
      arr : [1]
    },
    {
      text: 'Разработка игр, приложений и баз данных',//ифст
      nextQ: -1,//На итоговую страницу,
      arr: [0]
    }
    ]
		/*answers: [
			"Администрирование операционных систем",
			"Разработка игр, приложений и баз данных",
		],*/
	},
	{
		text: "Если вас заинтересовала ОЧНАЯ форма, то вам больше по душе:",
    arrA: [
      {
      text: 'Вычислительные машины и управление программных проектов',
      nextQ: 4,
      arr : []
    },
    {
      text: 'Разработка игр, приложений и баз данных',
      nextQ: 5,
      arr: []
    }
    ]
		/*answers: ["Вычислительные машины и управление программных проектов"
                "Разработка приложений и управление программных проектов",
            ],*/
	},
  {
		text: "Если вас заинтересовали вычислительные машины и управление программных проектов, то вам больше по душе:",
    arrA: [
      {
      text: 'Вычислительные машины',//ивчт
      nextQ: -1,//на итоговую страницу
      arr : [1]
    },
    {
      text: 'Управление разработкой программ',//пинф
      nextQ: -1,//На итоговую страницу,
      arr: [2]
    }
    ]
		/*answers: ["Вычислительные машины",
              "Управление разработкой программ"
            ],*/
	},

  {
		text: "Если вас заинтересовали разработка приложений и управление программных проектов, то вам больше по душе:",
    arrA: [
      {
      text: 'Управление разработкой программ',//пинж
      nextQ: -1,//на итоговую страницу
      arr : [3]
    },
    {
      text: 'Разработка игр, приложений и баз данных',//ифст
      nextQ: -1,//На итоговую страницу,
      arr: [0]
    }
    ]
		/*answers: ["Управление разработкой программ"
              "Разработка игр, приложений и баз данных",
            ],*/
	},








  {
    text: "Что тебе удобнее: очная, заочная или очно-заочная форма обучения?",
    arrA: [
      {
      text: 'Очная',
      nextQ: 8,
      arr : []
    },
    {
      text: 'Заочная',
      nextQ: 7,
      arr: []
    },
    {
      text: 'Очно-заочная',
      nextQ: 11,
      arr: []
    }
    ]
    /*
    answers: [
      "Очная",
      "Заочная",
      "Очно-заочная",
    ],*/
  },
  {
    text: "Если вас заинтересовала ЗАОЧНАЯ форма, то вам больше по душе:",
    arrA: [
      {
      text: 'Информационные технологии в связях с общественностью',//реклама
      nextQ: -1,//На итоговую страницу
      arr : [4]
    },
    {
      text: 'Сайты, дополнительная реальность',//ифст
      nextQ: -1,//На итоговую страницу
      arr: [0]
    }
    ]
    /*answers: [
       "Информационные технологии в связях с общественностью"
       "Сайты, дополнительная реальность",
    ],*/
  },
  {
    text: "Если вас заинтересовала ОЧНАЯ форма, то вам больше по душе:",
    arrA: [
      {
      text: 'Рисовать и проектировать',
      nextQ: 9,
      arr : []
    },
    {
      text: 'Снимать и писать',
      nextQ: 10,
      arr: []
    }
    ]
    /*answers: ["Рисовать и проектировать",
              "Снимать и писать",
              ],
              */

  },
  {
    text: "Если вам нравится РИСОВАТЬ И ПРОЕКТИРОВАТЬ, то вам больше по душе:",
    arrA: [
      {
      text: 'Разработка веб-приложений и искусственный интеллект',//ифст
      nextQ: -1,//На итоговую страницу
      arr : [0]
    },
    {
      text: 'Создание иллюстраций',//реклама
      nextQ: -1,//На итоговую страницу
      arr: [4]
    }
    ]
    /*
    answers: ["Разработка веб-приложений и искусственный интеллект",
              "Создание иллюстраций",
              ],
              */

  },
  {
    text: "Если вам нравится СНИМАТЬ И ПИСАТЬ, то могут понравится данные направления:",
    arrA: [
      {
      text: 'Связь с общественностью и пиар',//реклама
      nextQ: -1,//На итоговую страницу
      arr : [4]
    },
    {
      text: 'Режиссура и сценаристика',//тлвд
      nextQ: -1,//На итоговую страницу
      arr: [5]
    }
    ]
    /*
    answers: ["Связь с общественностью и пиар",
              "Режиссура и сценаристика",
              ],
              */

  },
  {
    text : "Если вас заинтересовала ОЧНО-ЗАОЧНАЯ форма, то есть хорошее направление:",
    arrA: [
      {
      text: 'Создание иллюстраций',//реклама
      nextQ: -1,//На итоговую страницу
      arr : [4]
    }
    ]
    /*
    answers: ["Создание иллюстраций",
              ],
              */

  },


];




const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let questionIndex = 0;
//clearPage();
showPage();
submitBtn.onclick = checkAnswer;

//функция по очистке страницы
function clearPage(){
  headerContainer.innerHTML = '';//возвращает пустое название вопроса(очищаем)
  listContainer.innerHTML = '';//очищаем варианты ответа
}



function showPage(){

clearPage();
//шаблон для заголовка
  const headerTemplate = `<h2 class="title">%title%</h2>`
  const title = headerTemplate.replace('%title%', questions[questionIndex]['text']);
  headerContainer.innerHTML = title;


let answerNumber = 1;
  for(answerText of questions[questionIndex]['arrA']){

    //шаблон для ответов
      const questionTemplate =
        `<li>
          <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
              <span>%answer%</span>
            </label>
          </li>`


      let answerHTML = questionTemplate.replace('%answer%', answerText.text);
      answerHTML = answerHTML.replace('%number%', answerNumber);

      listContainer.innerHTML += answerHTML;
      answerNumber++;
  }

}


function checkAnswer(){

  //Находим выбранную радио кнопку
  const checkRadio = listContainer.querySelector('input[type="radio"]:checked');

//Если ответ не выбран, то просто выходим из функции
  if (!checkRadio) {
    submitBtn.blur();
    return;
  }

  //то, что нажал пользователь
  const userAnswer = parseInt(checkRadio.value)-1;

  //Если выбрали ответ связанный с прогаммированием или вторчесвтом
  //let vector = questions[questionIndex]['choice'];

  doAnswer(userAnswer);

  //showPage();

}



function showResults(){
  console.log('rusult');
 clearPage();
  let result = End();


  let title = 'Спасибо за прохождение теста!!!';
  let message = 'У вас хороший вкус и вы выбрали правильное направление, подходящее только вам💀💀💀';

 const resultTemplate = `<h2 class="title">%title%</h2>
                         <h3 class="summary">%message%</h3>`

 //let title = resultTemplate.replace('%title%', questions[questionIndex]['question']);
 //let message = resultTemplate.replace('%message%', 'Хорошее направление)💀');

 let finalMessage = resultTemplate.replace('%title%', title)
                                  .replace('%message%', result.name);

 headerContainer.innerHTML = finalMessage;


 submit.blur();
 submitBtn.innerText = 'Начать заново';
 submitBtn.onclick = ()=>history.go();
}

function doAnswer(n)
{
  console.log(n);
  for(let elm of questions[questionIndex].arrA[n].arr)
  {
    directions[elm].score ++;
  }
  questionIndex = questions[questionIndex].arrA[n].nextQ;
  if (questionIndex<0) {
    showResults();
  }else {
    showPage();
  }
}

function End()
{
  directions.sort((a, b)=>{
    if(a.score>b.score) return 1;
    if(a.score == b.score) return 0;
    if(a.score <b.score) return -1;
  })
  return directions[directions.length-1]
}

function Answer(text, nextQ, arr)
{
  this.text = text;
  this.nextQ = nextQ;
  this.arr = arr;
}

function Question(text, arrA)
{
  this.text = text;
  this.arrA = arrA;
}



directions = [new Direction(`ИНФОМАЦИОННЫЕ СИСТЕМЫ И ТЕХНОЛОГИИ. 
	Высокопрофильное обучение программиррванию, разработке компьюторных игр и мобильный приложений, облачным
	вычислениям, базам данных, интеренет технологиям, технологиям искусственным интеллекта, вирктуальной
	и дополительной рельности, мультимедийным технологиям`),
new Direction(`ИНФОРМАТИКА И ВЫЧИСЛИТЕЛНАЯ ТЕХНИКА.
	Изучение современных информационных технологий, облачных технологий, языков программирования, математических
	основ информатики. Отдельное внимание уделяется аппаратному обеспечению компьюторных систем, администрированияю
	ОС и компьютерных систем.`),
	new Direction(`ПРИКЛАДНАЯ ИНФОРМАТИКА.
	Изучение средств разработки прикладного программного обеспечения, моделирования информационных процессов
	в целях разрешения конкретных практических проблем, проектирования информационных систем.`),
new Direction(`Вам подходит - ПРОГРАММНАЯ ИНЖЕНЕРИЯ.
	Программа обучения предполагает детальное изучение всех этопов создания программного продукта. Особое
	внимание уделяется освоению инструментов проектирования, разработки, тестирования программного обеспечения,
	изучаются технологии управления программными проектами и IT-услугами.`),
new Direction(`РЕКЛАМА И СВЯЗЬ С ОБЩЕСТВЕННОСТЬЮ.
	Студенты учатся создавать полный цыкл рекламной кмпании - от разработки концепции до создания цифровых рекламных
	медийных продуктов(графики, видео, трёмерная визуализация)`),
new Direction(`Вам подходит - ТЕЛЕВИДЕНИЕ.
	Студенты изучают операторское искусство, технологии видеомонтожа, тележурналистику, теле-и кинорежиссуру,
	сценаристику и редактору телепрограмм.`),
new Direction(`Вам подходит - ДИЗАЙН.
	Мастерство дизайнера-графика позволит выпускнику разрабатывать концепт-арт компьютерных игр, макетировать
	сайты, разрабатывать рекламные макеты для веб-пространства и полиграфии, создавать иллюстрации, видеозаставки,
	трёхмерные модели пространств и персонажей, анимацию, обрабатывать фотографии.`)];

function Direction(name)
{
  this.name = name;
  this.score = 0;
}
