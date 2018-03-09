/**
 * Created by vtl5cf0 on 28/09/2017.
 */
import {TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";
import {LoginService} from "./services/login.service";

describe("Unit Testing Header Component", () => {
    let hdrObj;
    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers:  [LoginService]
        })
        let fixture = TestBed.createComponent(HeaderComponent);
        hdrObj = fixture.debugElement.componentInstance;
    })

    it("should verify instance of header component", () => {
        expect(hdrObj).toBeTruthy();
    });

    it("Header Component cmpHeading Member", () => {
       expect(hdrObj.cmpHeading).toEqual("My Shopping Cart Application");
    });
});
