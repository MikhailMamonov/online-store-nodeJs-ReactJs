import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];

    this._brands = [];

    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};

    this._currentPage = 1;
    this._totalCount = 10;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this.setCurrentPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this.setCurrentPage(1);
    this._selectedBrand = brand;
  }

  setCurrentPage(currentPage) {
    this._currentPage = currentPage;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get currentPage() {
    return this._currentPage;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
