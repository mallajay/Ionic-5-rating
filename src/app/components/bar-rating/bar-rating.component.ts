import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bar-rating",
  templateUrl: "./bar-rating.component.html",
  styleUrls: ["./bar-rating.component.scss"]
})
export class BarRatingComponent implements OnInit {
  productDetail = {
    starOne: 1,
    starTwo: 1,
    starThree: 1,
    starFour: 1,
    starFive: 1,
    starTotal: 5
  };

  star: any = {};
  starValue: number;
  averageStar: number;

  multiple: any;
  barOneProgress: any;
  barTwoProgress: any;
  barThreeProgress: any;
  barFourProgress: any;
  barFiveProgress: any;

  public ratingRange = [1, 2, 3, 4, 5];
  rating1 = 1;
  rating2 = 2;
  rating3 = 3;
  rating4 = 4;
  rating5 = 5;

  reviewDetail: any = [];

  loading = false;
  lastPageLoaded = 0;

  constructor() {}

  ngOnInit() {
    this.star = this.productDetail;

    this.starValue =
      1 * this.star.starOne +
      2 * this.star.starTwo +
      3 * this.star.starThree +
      4 * this.star.starFour +
      5 * this.star.starFive;

    this.averageStar = this.starValue / this.star.starTotal;
    this.multiple = this.star.starTotal * this.averageStar;

    this.barOneProgress = (1 * this.star.starOne * 1) / this.multiple;
    this.barTwoProgress = (2 * this.star.starTwo * 1) / this.multiple;
    this.barThreeProgress = (3 * this.star.starThree * 1) / this.multiple;
    this.barFourProgress = (4 * this.star.starFour * 1) / this.multiple;
    this.barFiveProgress = (5 * this.star.starFive * 1) / this.multiple;
  }
}
