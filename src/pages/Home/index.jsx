//HOME






import React, { useEffect, useState } from 'react';
import { Conteiner } from './styles';
import productNootsIMG from '../../assets/products/noots.png';
import { useScroll } from '../../hooks/useScroll/useScroll';


const Home = () => {
  //    const [element, setElement] = useState(null)

  // useEffect(() => {
  //   // Função para lidar com o evento de scroll
  //   const handleScroll = () => {
  //     // Aqui você pode realizar qualquer ação que deseja quando ocorrer o scroll
  //     console.log('Scroll detectado');
  //   };

  //   // Adiciona um ouvinte de evento de scroll à div Conteiner
  //   const conteinerDiv = document.getElementsByClassName('--iHome_presentation_one_conteiner'); // Certifique-se de que a classe '.Conteiner' corresponda à sua div Conteiner
   
  //   console.log(conteinerDiv[0].offsetTop)
  //   setElement(conteinerDiv)
  //   conteinerDiv[0].addEventListener('scroll', handleScroll);

  //   // Remove o ouvinte de evento de scroll quando o componente for desmontado
  //   // return () => {
  //   //   conteinerDiv.removeEventListener('scroll', handleScroll);
  //   // };
  // }, [element]);



  // const [element, setElement] = useState('presentation_one')


  // const { elemetY,scanScroll } = useScroll(element)


  // document.addEventListener('scroll', scanScroll)

















  // useEffect(() => {
  //   const element = document.getElementById("presentation_two");

  //   // Obtém as informações de retângulo do elemento
  //   const rect = element.getBoundingClientRect();

  //   // Acesse as propriedades do objeto rect
  //   console.log("Coordenada X (esquerda): " + rect.x);
  //   console.log("Coordenada Y (topo): " + rect.y);
  //   console.log("Largura: " + rect.width);
  //   console.log("Altura: " + rect.height);
  //   console.log("Coordenada Y (parte inferior): " + rect.bottom);
  //   console.log("Coordenada X (parte direita): " + rect.right);


  // }, [])

// useEffect(() => {
//   const element = document.getElementById("presentation_two");

//   // Cria uma instância do Intersection Observer
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // O elemento entrou na viewport
//         console.log("Elemento está visível na tela.");
//         const distanciaTopo = entry.boundingClientRect.top;
//         console.log(`A distância da div ao topo da página é ${distanciaTopo}px`);
     
//       } else {
//         // O elemento saiu da viewport
//         console.log("Elemento não está mais visível na tela.");
//       }
//     });
//   });

//   // Começa a observar o elemento
//   observer.observe(element);

//   // Certifique-se de parar de observar quando o componente for desmontado
//   return () => {
//     observer.unobserve(element);
//   };
// }, []);

// useEffect(() => {
//   // Obtém uma referência para a div que você deseja monitorar
//   const element = document.getElementById("presentation_one");

//   // Cria uma instância do Intersection Observer
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // A parte superior da div está visível na viewport
//         const distanciaTopo = entry.boundingClientRect.top;
//         console.log(`A distância da div ao topo da página é ${distanciaTopo}px`);
//       } else {
//         // A div não está mais visível na viewport
//         console.log("A div não está visível na viewport.");
//       }
//     });
//   });

//   // Começa a observar a div alvo
//   observer.observe(element);

//   // Função para atualizar a distância da div quando a página é rolada
//   const atualizarDistancia = () => {
//     const distanciaTopo = element.getBoundingClientRect().top;
//     console.log(`A distância da div ao topo da página é ${distanciaTopo}px`);
//   };

//   // Adiciona um ouvinte de evento de scroll para a janela
//   window.addEventListener("scroll", atualizarDistancia);

//   // Certifica-se de parar de observar a div e remover o ouvinte de evento quando o componente for desmontado
//   return () => {
//     observer.unobserve(element);
//     window.removeEventListener("scroll", atualizarDistancia);
//   };
// }, []);


useEffect(() => {
  // Obtém uma referência para a div que você deseja monitorar
  const element = document.getElementById("presentation_one");

  // Função para atualizar a distância da div quando a página é rolada
  const atualizarDistancia = () => {
    const distanciaTopo = element.getBoundingClientRect().top;
    console.log(`A distância da div ao topo da página é ${distanciaTopo}px`);
  };

  // Adiciona um ouvinte de evento de scroll para a janela
  window.addEventListener("scroll", atualizarDistancia);

  // Chama a função inicialmente para apresentar a distância ao carregar a página
  atualizarDistancia();

  // Certifica-se de remover o ouvinte de evento quando o componente for desmontado
  return () => {
    window.removeEventListener("scroll", atualizarDistancia);
  };
}, []);



  return (
    <Conteiner  className='Conteiner'>
      {/* CRIAR A PRIMEIRA APRESENTAÇÃO DO HOME */}
      <div className='--iHome_presentation_one_conteiner' id='presentation_one'>
        <div className='--iDbox'>
          <p>NOOTS</p>
        </div>
        <div className='--iDbox'>
          <img src={productNootsIMG} alt="" />
        </div>
      </div>

      {/* Adicione outras divs conforme necessário */}
      <div className='--iHome_presentation_one_conteiner' id='presentation_two' style={{ background: '#ff00c8' }}></div>
      <div className='--iHome_presentation_one_conteiner' id='presentation_three' style={{ background: '#222' }}></div>
      <div className='--iHome_presentation_one_conteiner' id='presentation_four' style={{ background: '#0077ff' }}></div>
      <div className='--iHome_presentation_one_conteiner' id='presentation_five' style={{ background: '#fa2414' }}></div>


    </Conteiner>
  );
};

export default Home;


















































































// import React, { useEffect, useState } from 'react';
// import { Conteiner } from './styles'


// import productNootsIMG from '../../assets/products/noots.png'



// const Home = () => {


//   const [scroll, setScroll] = useState(null)


//   useEffect(() => {




//     // Seleciona todas as divs com a classe '--iHome_presentation_one_conteiner'
//     const divElements = document.getElementsByClassName('--iHome_presentation_one_conteiner');

//     // Loop através dos elementos
//     for (let i = 0; i < divElements.length; i++) {
//       const divElement = divElements[i];
//       const computedStyles = window.getComputedStyle(divElement);

//       // Acessa os estilos desejados, por exemplo, width
//       const width = computedStyles.height;

//       console.log(`Width da div ${i + 1}: ${width}`);
//     }












//   }, []);

  


//   return (

//     <Conteiner>

//       {/* CRIAR A PRIMEIRA APRESNTAÇÃO DO HOME */}
//       <div className='--iHome_presentation_one_conteiner' id='presentation_one'>
//         <div className='--iDbox'>
//           <p>NOOTS</p>
//         </div>
//         <div className='--iDbox'>
//           <img src={productNootsIMG} alt="" />
//         </div>
//       </div>




//       <div className='--iHome_presentation_one_conteiner' id='presentation_two' style={{ background: '#ff00c8' }}></div>
//       <div className='--iHome_presentation_one_conteiner' id='presentation_three' style={{ background: '#222' }}></div>
//       <div className='--iHome_presentation_one_conteiner' id='presentation_four' style={{ background: '#0077ff' }}></div>
//       <div className='--iHome_presentation_one_conteiner' id='presentation_five' style={{ background: '#fa2414' }}></div>

//     </Conteiner>

//   )
// }

// export default Home