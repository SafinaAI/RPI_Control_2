

import { render, RenderPosition } from "./framework/render.js";
import FinanceModel from "../src/model/finance-model.js";
import FinancePresenter from "../src/presenter/finance-presenter.js";

// Получение контейнера для рендеринга
const bodyContainer = document.querySelector(".board-app");

// Создание модели и презентера
const financeModel = new FinanceModel();
const financePresenter = new FinancePresenter(bodyContainer, financeModel);

// Инициализация презентера
financePresenter.init();
