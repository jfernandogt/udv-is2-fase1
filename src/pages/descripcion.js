import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Mejor momento para comprar o vender acciones</h1>
        <h2>Descripción:</h2>
        <p>
          Se le da una matriz de precios donde precios[i] es el precio de una
          acción determinada en el i-ésimo día. Desea maximizar sus ganancias
          eligiendo un solo día para comprar una acción y eligiendo un día
          diferente en el futuro para vender esa acción. Devuelva la máxima
          ganancia que pueda obtener de esta transacción. Si no puede obtener
          ningún beneficio, devuelva 0.
        </p>
        <h2>Ejemplos:</h2>
        <h3>Ejemplo 1</h3>
        <pre>
        Entrada: precios = [7,1,5,3,6,4] <br />
        Salida: 5 <br />
        Explicación: Compre el día 2 (precio = 1) y venda el día 5 (precio = 6), ganancia = 6-1 = 5. <br />
        Tenga en cuenta que no está permitido comprar el día 2 y vender el día 1 porque debe comprar antes de vender.
        </pre>

        <h3>Ejemplo 2:</h3>
        <pre>
        Entrada: precios = [7,6,4,3,1] <br />
        Salida: 0 <br />
        Explicación: En este caso, no se realizan transacciones y el beneficio máximo = 0.
        </pre>
      </main>
    </>
  );
}
