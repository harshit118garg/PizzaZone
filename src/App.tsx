import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { theme } from "./theme/theme";
import Navigation from "./widgets/Header";
import ContentHeader from "./widgets/ContentHeader";
import Container from "./widgets/Container";
// import { useQuery } from "@tanstack/react-query";
// import { fetchPizzaData } from "./api/query";
// import { PizzaResponseType } from "./definations/types";

function App() {
  /*
  const { isPending, error, data } = useQuery<PizzaResponseType[]>({
    queryKey: ["pizzas"],
    queryFn: fetchPizzaData,
    refetchOnMount: "always",
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

    console.log({ data });
    */

  return (
    <>
      <div id="app">
        <ThemeProvider theme={theme}>
          <Navigation />
          <main>
            <ContentHeader />
            <Container>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                facere neque veritatis. Nulla ipsa, maxime quaerat in
                exercitationem, possimus nostrum eos reiciendis fugiat nisi
                dolorem distinctio architecto hic facere unde, corporis placeat
                quae consequuntur adipisci voluptatem. Reprehenderit, odio?
                Tempora sit eius quidem maiores nihil, praesentium voluptatum
                sed sequi modi eaque perspiciatis quibusdam nisi, aspernatur
                magni sunt eos ad distinctio nostrum excepturi doloremque.
                Minima molestiae dolorum cum, in doloribus nam? Voluptatem sit
                eius dicta, accusantium dolorum animi? Quae adipisci cumque
                alias esse inventore hic voluptate dolorum, minima a quaerat
                exercitationem harum. Laudantium quidem odit atque corporis
                voluptatum quis eveniet perspiciatis harum maxime cum, error
                necessitatibus in consequuntur officiis earum doloribus fuga
                provident, aperiam quas ipsam assumenda similique inventore
                voluptates. Harum recusandae distinctio reprehenderit voluptate
                vitae. Error, recusandae beatae dolorem at accusantium ipsam
                iure, soluta quibusdam velit quis eius, dolore ea fugiat dolores
                delectus rerum repellat in sunt porro repudiandae ratione?
                Beatae, inventore, voluptate temporibus repudiandae iste
                similique eligendi ipsam ullam, obcaecati blanditiis ab magni
                voluptates laboriosam. Reprehenderit debitis quis nobis error
                natus ducimus impedit nulla, quibusdam a vero quos. Nobis nihil
                nulla sunt asperiores ad laudantium corporis aliquid excepturi,
                quidem laborum debitis eaque dolorum, porro illo ipsa? Molestiae
                velit facilis aliquam cumque exercitationem consequuntur, vel
                incidunt sapiente quis, hic quibusdam? Corporis maiores, nulla
                velit omnis est numquam libero, placeat repudiandae veniam vero
                quia beatae earum modi aliquam fuga dolorem nisi totam, porro
                voluptate quis ea cumque itaque ratione eligendi. Consequatur
                cum commodi dolor ullam ipsum doloribus id! Fuga est unde
                eligendi iure expedita inventore odit maiores perspiciatis
                quidem similique. Quidem odit minus voluptatem laborum. Modi
                temporibus delectus vero fuga blanditiis dignissimos quibusdam
                eveniet? Soluta voluptate nihil impedit eveniet totam tenetur
                consequuntur, illum architecto excepturi repellendus
                reprehenderit incidunt veritatis, veniam laboriosam in
                laudantium possimus iusto accusantium aspernatur deleniti
                voluptatem tempora! Cumque velit praesentium hic corporis,
                molestiae autem voluptatem maiores animi eligendi perspiciatis
                fuga illum optio dicta nam deserunt repellendus voluptas vitae!
                Unde totam, sint autem fuga quas repellendus recusandae odit
                facilis nisi magnam harum dolores aut, magni, iure sequi minus
                in id optio illum. Dignissimos, est? Consequuntur suscipit,
                dolor ut impedit dolores beatae odit sunt facere illo minima
                dolorem incidunt. Officia aliquid tempora dolore earum impedit
                ad dolorum vero nobis maiores, eius sapiente esse temporibus
                architecto in eveniet, id numquam laudantium praesentium, sunt
                laborum dolor illum consectetur libero. Rem, perferendis
                laudantium exercitationem ducimus assumenda harum perspiciatis
                vitae corporis nam delectus. Labore, eos! Illum ut voluptatem,
                voluptates, nesciunt obcaecati laudantium vel iste iusto
                cupiditate enim doloremque odit facilis, nam consectetur minima
                nihil quod quisquam suscipit quam sunt accusantium modi ad.
                Suscipit animi obcaecati nostrum itaque deleniti? Corporis enim
                dolorem nihil atque eius quis, hic ad quos? Esse dignissimos
                veritatis incidunt necessitatibus odio voluptates, maiores, quo
                alias saepe, non nulla reprehenderit temporibus laborum corporis
                voluptatum nostrum vero in nihil voluptatibus. Inventore ex
                reprehenderit sed, harum libero, quo dolore, magnam quam
                deserunt aperiam tenetur mollitia illo quibusdam officia
                deleniti dolorem accusantium. Adipisci deleniti sunt ut quae
                nemo iure! Laborum atque laboriosam tenetur eum debitis
                quibusdam eius modi ex, quae dolor voluptatem aut porro
                temporibus sint culpa minima officia ab error aspernatur eveniet
                minus sit. Consectetur, porro. Minus accusantium corrupti
                explicabo, voluptates ratione ea ab vitae molestiae similique
                at, saepe nostrum odio, praesentium nihil earum ex nisi
                necessitatibus soluta corporis aperiam ad. Non quasi, aliquid
                saepe iure blanditiis similique error culpa ea itaque animi
                optio aperiam alias labore velit eos sint eaque numquam quas cum
                aut repudiandae at praesentium. Dolor dicta harum autem
                voluptas! Dolores iure nihil consequuntur temporibus repellendus
                totam recusandae vitae accusamus unde deleniti consequatur ipsum
                delectus at modi, omnis aliquam illo sint nemo nostrum? Harum
                deserunt eaque nesciunt reiciendis magni maiores architecto
                atque voluptas quas. Eum labore a optio! Voluptatem tempora
                porro placeat, delectus cupiditate fugit earum architecto
                doloribus atque ipsam, obcaecati totam aut eos. Nostrum minus,
                nam explicabo sit quod cum soluta, accusantium aut sapiente
                nesciunt modi omnis est repudiandae repellendus eos quam ab eius
                illo cumque. Sapiente ipsa iure incidunt quod porro tenetur
                totam reprehenderit excepturi labore consequuntur dolor, dolorum
                blanditiis perferendis neque in ratione quidem, dolore
                voluptatibus. Esse ea doloremque dolorum nostrum fugit tenetur
                fugiat, amet obcaecati ex praesentium laudantium rem. Cupiditate
                voluptatem neque, consectetur expedita facere unde at laborum
                dicta perferendis ab quidem amet minima est exercitationem,
                officiis sint nisi voluptatum consequuntur libero, fugiat
                molestias voluptate doloremque quasi. Debitis voluptatem quo
                perspiciatis adipisci vero iste placeat, quaerat consequuntur
                nemo dolor quas cupiditate libero delectus itaque odit soluta
                accusamus velit dolore iusto? Explicabo mollitia ab pariatur
                corrupti ratione aspernatur id deleniti, expedita, quam error
                consequuntur? Dicta impedit sit harum porro eius ex tenetur
                accusantium dignissimos! Odit cupiditate vel praesentium
                doloremque magnam officiis commodi ipsa sint consequatur
                inventore aliquid perferendis, harum omnis quia enim dolores.
                Error a hic laboriosam ea. Impedit nostrum ducimus voluptates
                repellat tempore ipsam vero hic aperiam ut? Quae cupiditate
                aliquid, perferendis quo ut ipsam architecto itaque voluptatum
                fugiat eligendi quasi incidunt earum reprehenderit similique?
                Nihil ratione odit a sit ad ullam architecto? Vel dolor magnam
                dolorem soluta labore consectetur ipsa in nihil sapiente culpa,
                eius odit, molestiae temporibus repudiandae impedit minus?
                Ratione minima aliquid nihil possimus eligendi distinctio porro
                facilis ex? Quaerat eius culpa, saepe nulla quae temporibus
                tempore, a enim nemo vel nisi laborum officia nostrum neque
                expedita nobis, aspernatur dignissimos? Nihil aspernatur
                doloribus expedita corporis recusandae quisquam accusantium
                minus vel magnam saepe quas porro earum, sit nesciunt. Possimus
                perferendis optio sit obcaecati, nostrum atque dolorum saepe ea
                amet commodi qui accusamus! Distinctio quam eaque rem tempore
                explicabo. Cumque ipsa reiciendis obcaecati libero a fuga magnam
                ipsum nobis necessitatibus odio corporis, natus dicta quas dolor
                expedita placeat distinctio quo laudantium iste doloribus?
                Tenetur, harum eaque mollitia iure reprehenderit rerum suscipit?
                Quo veritatis ab doloribus eum vel possimus similique est alias
                asperiores quos porro sit animi molestiae aut fugit culpa
                pariatur esse assumenda ut voluptatum, maxime cumque numquam
                iusto sequi! Perferendis, ut ipsum eaque quas quasi dolore,
                laborum praesentium fugit natus perspiciatis porro suscipit quae
                possimus, similique voluptate deleniti nulla explicabo labore
                nisi reiciendis ullam et unde.
              </p>
            </Container>
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
