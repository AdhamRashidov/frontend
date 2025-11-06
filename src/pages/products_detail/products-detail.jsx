import { useNavigate, useParams } from 'react-router-dom';
import { products1, products2 } from '../../data/index.js';
import bottomPointer from "../../assets/bottom-pointer.svg"


export const ProductsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let product = products1.find((item) => item.id === Number(id));
  let isAudioBook = false;

  if (!product) {
    product = products2.find((item) => item.id === Number(id));
    isAudioBook = true;
  }

  if (!product) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold">Китоб топилмади</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Бош сахифага қайтиш
        </button>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container">
          <section>
            <div className="container">
              <ul className="flex gap-1 mb-8">
                <li>
                  <p className="text-blue-400 text-16px font-medium">
                    Бош сахифа /{" "}
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 text-16px font-medium">
                    {" "}
                    {isAudioBook ? "Аудио китоблар" : "Китоблар"}
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="container">
            <div className="flex gap-6 mb-16">
              <div className="w-[350px]">
                <img src={product.image} alt="img" />
              </div>
              <div>
                <div className="grid grid-cols-2">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <p className="text-gray-500 mb-4">{product.janr}</p>
                  </div>
                  <div>
                    <img src={bottomPointer} alt="icon" />
                  </div>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam esse, fugit repellat quis voluptate dolorum dolor
                  quasi totam non eligendi beatae, nulla praesentium voluptatum.
                  Commodi consequatur molestiae repellendus cupiditate beatae.
                </p>
                <div className="w-[414px] mt-4 flex justify-between">
                  <ul>
                    <li>
                      <p className="text-[14px] font-normal text-gray-400">
                        Муаллиф
                      </p>
                    </li>
                    <li>
                      <p className="text-[18px] font-semibold">Kevin Smiley</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p className="text-[14px] font-normal text-gray-400">
                        Нашриёт
                      </p>
                    </li>
                    <li>
                      <p className="text-[18px] font-semibold">Wepress Inc.</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p className="text-[14px] font-normal text-gray-400">
                        Йил
                      </p>
                    </li>
                    <li>
                      <p className="text-[18px] font-semibold">1999</p>
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-dashed border-gray-400 rounded-2xl my-5"></div>
                <ul className="flex gap-4">
                  <li className="bg-blue-600 text-[16px] font-medium text-white w-[242px] py-2 px-4 rounded-2xl">
                    Сотиб олиш - 65 000 сум
                  </li>
                  {isAudioBook && (
                    <li className="border border-blue-600 text-[16px] font-medium w-[242px] py-2 px-4 rounded-2xl">
                      Аудио тинглаш - 55 000 сум
                    </li>
                  )}
                  <li className="border border-blue-600 text-[16px] font-medium w-[242px] py-2 px-4 rounded-2xl">
                    Онлайн укиш - 45 000 сум
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="flex gap-[38px] mb-4">
                <li className="text-[32px] font-bold ">Маълумотлар</li>
                <li className="text-[32px] font-bold text-gray-400">Фикрлар</li>
              </ul>

              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6">
                <li className="text-[16px] font-bold w-[146px]">Китоб номи</li>
                <li className="text-[16px] font-normal">{product.title}</li>
              </ul>
              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6">
                <li className="text-[16px] font-bold w-[146px]">Муаллиф</li>
                <li className="text-[16px] font-normal">Даниел КИЗ</li>
              </ul>
              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6">
                <li className="text-[16px] font-bold w-[146px]">ISBN</li>
                <li className="text-[16px] font-normal">
                  121341381648 (ISBN13: 121341381648)
                </li>
              </ul>
              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6">
                <li className="text-[16px] font-bold w-[146px]">Тил</li>
                <li className="text-[16px] font-normal">Ўзбек</li>
              </ul>
              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6">
                <li className="text-[16px] font-bold w-[146px]">Сахифалар</li>
                <li className="text-[16px] font-normal">450</li>
              </ul>
              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6">
                <li className="text-[16px] font-bold w-[146px]">
                  Чоп этилган сана
                </li>
                <li className="text-[16px] font-normal">Апрель 7, 1999</li>
              </ul>
              <ul className="flex gap-[143px] w-[912px] border border-gray-400 py-5 pl-6 mb-10">
                <li className="text-[16px] font-bold w-[146px]">Нашриёт</li>
                <li className="text-[16px] font-normal">Wepress Inc.</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};