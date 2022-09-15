import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray } from '@angular/forms';
import { SubserviceService } from '../subservice.service';
import { Router , ActivatedRoute} from '@angular/router';
// import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  generalForm!:FormGroup;
  Data:any;
  id:any;
  data:any;


  constructor(private fb:FormBuilder , private sub:SubserviceService , private route:Router ) { }
  step=0;
  butt=0;
  index=new Array(19);


  ngOnInit(): void {
   
    // console.log(this.id);


    this.generalForm=this.fb.group({
      id:[''],
      instiName:[''],
      state:[''],
      urlname:[''],
      location:[''],
      paddress:[''],
      city:[''],
      nostaff:[''],
      noboys:[''],
      coname:[''],
      medium:[''],
      ofemail:[''],
      needs:[''],
      district:[''],
      pincode:[''],
      ofphno:[''],
      acadyear:[''],
      gender:[''],
      cunofstu:[''],
      comono:[''],
      nameofprince:[''],
      yearofest:[''],
      natureofaffili:[''],
      cunofgirls:[''],
      nonteaching:[''],
      coemailid:[''],
      sclevel:[''],
      headmono:[''],
      heademailid:[''],
      headofphno:[''],
      instirecog:[''],
      nameboard:[''],
      affiliationno:[''],
      affiliyear:[''],
      affilipertemp:[''],
      affilicondition:[''],
      minstatus:[''],
      christian:[''],
      hindu:[''],
      islam:[''],
      others:[''],
      nonbelievers:[''],
      firecer:[''],
      sanicer:[''],
      buildcer:[''],
      schown:[''],
      nametrust:[''],
      registertrust:[''],
      act:[''],
      yearregis:[''],
      registernu:[''],
      validreg:[''],
      namepcm:[''],
      desigpcm:[''],
      addresspcm:[''],
      phonepcm:[''],
      emailpcm:[''],
      tsc:[''],
      tscmembers:[''],
      tsctenure:[''],
      epcc:[''],
      epccmembers:[''],
      epcctenure:[''],
      pt:[''],
      ptmembers:[''],
      pttenure:[''],
      sacouncil:[''],
      samembers:[''],
      satenure:[''],
      ggcc:[''],
      schoolmc:[''],
      constitutionmc:[''],
      mcmembers:[''],
      mctenure:[''],
      schlocation:[''],
      scharea:[''],
      builduparea:[''],
      playarea:[''],
      nobuildings:[''],
      differentlyavail:[''],
      noofstairs:[''],
      nooflifts:[''],
      croom:[''],
      sroom:[''],
      pl:[''],
      cl:[''],
      bl:[''],
      ml:[''],
      csl:[''],
      ll:[''],
      hsl:[''],
      library:[''],
      audit:[''],
      cr:[''],
      up:[''],
      prc:[''],
      sickr:[''],
      canteen:[''],
      sr:[''],
      orh:[''],
      sut:[''],
      stut:[''],
      rooms:[''],
      speneeds:[''],
      handlesn:[''],
      bw:[''],
      bwyes:[''],
      cctv:[''],
      ds:[''],
      hmcamera:[''],
      msg:[''],
      hmmalesg:[''],
      femalesg:[''],
      hwfemalesg:[''],
      drinkingwf:[''],
      pdf:[''],
      mms:[''],
      nobuses:[''],
      gpsec:[''],
      nola:[''],
      firstak:[''],
      drinkingwa:[''],
      nobusessc:[''],
      efgfbp:[''],
      freetsobts:[''],
      // mmfainsch:[''],
      lot:[''],
      lct:[''],
      tnolb:[''],
      tnolm:[''],
      tnold:[''],
      tnoeb:[''],
      oalr:[''],
      slfps:[''],
      provisionrt:[''],
      mmfas1:[''],
      mmfas2:[''],
      mmfas3:[''],
      mmfas4:[''],
      mmfas5:[''],
      phmpmale:[''],
      phmpfmale:[''],
      phmtmale:[''],
      phmtfmale:[''],
      // phmTmale:[''],
      // phmTfmale:[''],
      vppmale:[''],
      vppfmale:[''],
      vptmale:[''],
      vptfmale:[''],
      // vpTmale:[''],
      // vpTfmale:[''],
      PGTpmale:[''],
      PGTpfmale:[''],
      PGTtmale:[''],
      PGTtfmale:[''],
      // PGTTmale:[''],
      // PGTTfmale:[''],
      TGTpmale:[''],
      TGTpfmale:[''],
      TGTtmale:[''],
      TGTtfmale:[''],
      // TGTTmale:[''],
      // TGTTfmale:[''],
      PRTpmale:[''],
      PRTpfmale:[''],
      PRTtmale:[''],
      PRTtfmale:[''],
      // PRTTmale:[''],
      // PRTTfmale:[''],
      NTTpmale:[''],
      NTTpfmale:[''],
      NTTtmale:[''],
      NTTtfmale:[''],
      // NTTTmale:[''],
      // NTTTfmale:[''],
      UTpmale:[''],
      UTpfmale:[''],
      UTtmale:[''],
      UTtfmale:[''],
      // UTTmale:[''],
      // UTTfmale:[''],
      Lpmale:[''],
      Lpfmale:[''],
      Ltmale:[''],
      Ltfmale:[''],
      // LTmale:[''],
      // LTfmale:[''],
      Artspmale:[''],
      Artspfmale:[''],
      Artstmale:[''],
      Artstfmale:[''],
      // ArtsTmale:[''],
      // ArtsTfmale:[''],
      Cpmale:[''],
      Cpfmale:[''],
      Ctmale:[''],
      Ctfmale:[''],
      // CTmale:[''],
      // CTfmale:[''],
      CLpmale:[''],
      CLpfmale:[''],
      CLtmale:[''],
      CLtfmale:[''],
      // CLTmale:[''],
      // CLTfmale:[''],
      FMpmale:[''],
      FMpfmale:[''],
      FMtmale:[''],
      FMtfmale:[''],
      // FMTmale:[''],
      // FMTfmale:[''],
      Nursepmale:[''],
      Nursepfmale:[''],
      Nursetmale:[''],
      Nursetfmale:[''],
      // NurseTmale:[''],
      // NurseTfmale:[''],
      PTpmale:[''],
      PTpfmale:[''],
      PTtmale:[''],
      PTtfmale:[''],
      // PTTmale:[''],
      // PTTfmale:[''],
      // Totalpmale:[''],
      // Totalpfmale:[''],
      // Totaltmale:[''],
      // Totaltfmale:[''],
      // TotalTmale:[''],
      // TotalTfmale:[''],
      ofmaper:[''],
      ofmatemp:[''],
      ofmapart:[''],
      // ofmatotal:[''],
      ofasper:[''],
      ofastemp:[''],
      ofaspart:[''],
      // ofastotal:[''],
      clerkper:[''],
      clerktemp:[''],
      clerkpart:[''],
      // clerktotal:[''],
      labper:[''],
      labtemp:[''],
      labpart:[''],
      // labtotal:[''],
      accountper:[''],
      accounttemp:[''],
      accountpart:[''],
      // accounttotal:[''],
      peonsper:[''],
      peonstemp:[''],
      peonspart:[''],
      // peonstotal:[''],
      othersper:[''],
      otherstemp:[''],
      otherspart:[''],
      // otherstotal:[''],
      no_of_activities:[''],
      no_of_groups:[''],
      no_of_community:[''],
      no_of_sports_school:[''],
      no_of_sports_zonal:[''],
      no_of_sports_district:[''],
      no_of_sports_state:[''],
      no_of_sports_national:[''],
      no_of_sports_international:[''],
      no_of_competition_school:[''],
      no_of_competition_zonal:[''],
      no_of_competition_district:[''],
      no_of_competition_state:[''],
      no_of_competition_national:[''],
      no_of_competition_international:[''],
      no_of_interprograms_school:[''],
      no_of_interprograms_zonal:[''],
      no_of_interprograms_district:[''],
      no_of_interprograms_state:[''],
      no_of_interprograms_national:[''],
      no_of_interprograms_international:[''],

      acad_year_begins:[''],
      acad_year_ends:[''],
      workingdays_21_22:[''],
      workingdays_20_21:[''],
      workingdays_19_20:[''],
      eachday_workhours_21_22:[''],
      eachday_workhours_20_21:[''],
      eachday_workhours_19_20:[''],
      totalhours_21_22:[''],
      totalhours_20_21:[''],
      totalhours_19_20:[''],
      non_instruct_workdays_21_22:[''],
      non_instruct_workdays_20_21:[''],
      non_instruct_workdays_19_20:[''],
      holiday_except_holidays_21_22:[''],
      holiday_except_holidays_20_21:[''],
      holiday_except_holidays_19_20:[''],
      teaching_periods_perweek:[''],
      faith_periods_perweek:[''],
      period_duration:[''],
      totalhours_forclubs:[''],
      summer_timein:[''],
      summer_timeout:[''],
      winter_timein:[''],
      winter_timeout:[''],
      school_shift:[''],
      scholarship:this.fb.array([]),
      enrollment:this.fb.array([]),
      
    });

    this.sub.profileget().subscribe((arg : any)=>{
      this.generalForm.patchValue(arg);

      this.data = arg;
      console.log(this.data.scholarship);
    
      // this.generalForm.get('scholarship')?.patchValue(this.data.scholarship)


      console.log(this.data.scholarship);
      
      this.data.scholarship.forEach((element:any) => {
        
         this.Scholarship().push(this.loadScholarship(element))        
      });

      this.data.enrollment.forEach((element:any) => {
        
        this.Enrollment().push(this.loadEnrollment(element))        
     });
   
   
      // this.loadData(); 
    })
    this.next();
    
  }

  Scholarship():FormArray{
      return this.generalForm.get('scholarship') as FormArray;
  }
  Enrollment():FormArray{
    return this.generalForm.get('enrollment') as FormArray;
  }

  newScholarship():FormGroup{
   return this.fb.group({
      scholarshipName:[],
      scholarshipBoys:[],
      girls:[],
      govt:[],
      pvt:[]
    
    });
  }


  newEnrollment():FormGroup{
    return this.fb.group({
       enrol_class:[],
       enrol_no_of_section:[],
       enrol_total_boys:[],
       enrol_total_girls:[],
       enrol_total_students:[]
     
     });
   }

  loadScholarship(data : any):FormGroup{
    return this.fb.group({
       scholarshipName:[data[0]],
       scholarshipBoys:[data[1]],
       girls:[data[2]],
       govt:[data[3]],
       pvt:[data[4]]
     
     });
   }

   loadEnrollment(data : any):FormGroup{
    return this.fb.group({
       enrol_class:[data[0]],
       enrol_no_of_section:[data[1]],
       enrol_total_boys:[data[2]],
       enrol_total_girls:[data[3]],
       enrol_total_students:[data[4]]
     
     });
   }


  addScholarship(){
    this.Scholarship().push(this.newScholarship());
  }

  addEnrollment(){
    this.Enrollment().push(this.newEnrollment());
  }

  removeScholarship(i:any){
    this.Scholarship().removeAt(i)
  }


  removeEnrollment(i:any){
    this.Enrollment().removeAt(i)
  }

  // loadData(){
  //   this.generalForm=this.fb.group({
  //     id:[this.data.id],
  //     instiName:[this.data.instiName],
  //     state:[this.data.state],
  //     urlname:[this.data.urlname],
  //     location:[this.data.location],
  //     paddress:[this.data.paddress],
  //     city:[this.data.city],
  //     nostaff:[this.data.nostaff],
  //     noboys:[this.data.noboys],
  //     coname:[this.data.coname],
  //     medium:[this.data.medium],
  //     ofemail:[this.data.ofemail],
  //     needs:[this.data.needs],
  //     district:[this.data.district],
  //     pincode:[this.data.pincode],
  //     ofphno:[this.data.ofphno],
  //     acadyear:[this.data.acadyear],
  //     gender:[this.data.gender],
  //     cunofstu:[this.data.cunofstu],
  //     comono:[this.data.comono],
  //     nameofprince:[this.data.nameofprince],
  //     yearofest:[this.data.yearofest],
  //     natureofaffili:[this.data.natureofaffili],
  //     cunofgirls:[this.data.cunofgirls],
  //     nonteaching:[this.data.nonteaching],
  //     coemailid:[this.data.coemailid],
  //     sclevel:[this.data.sclevel],
  //     headmono:[this.data.headmono],
  //     heademailid:[this.data.heademailid],
  //     headofphno:[this.data.headofphno],
  //     instirecog:[this.data.instirecog],
  //     nameboard:[this.data.nameboard],
  //     affiliationno:[this.data.affiliationno],
  //     affiliyear:[this.data.affiliyear],
  //     affilipertemp:[this.data.affilipertemp],
  //     affilicondition:[this.data.affilicondition],
  //     minstatus:[this.data.minstatus],
  //     christian:[this.data.christian],
  //     hindu:[this.data.hindu],
  //     islam:[this.data.islam],
  //     others:[this.data.others],
  //     nonbelievers:[this.data.nonbelievers],
  //     firecer:[this.data.firecer],
  //     sanicer:[this.data.sanicer],
  //     buildcer:[this.data.buildcer],
  //     schown:[this.data.schown],
  //     nametrust:[this.data.nametrust],
  //     registertrust:[this.data.registertrust],
  //     act:[this.data.act],
  //     yearregis:[this.data.yearregis],
  //     registernu:[this.data.registernu],
  //     validreg:[this.data.validreg],
  //     namepcm:[this.data.namepcm],
  //     desigpcm:[this.data.desigpcm],
  //     addresspcm:[this.data.addresspcm],
  //     phonepcm:[this.data.phonepcm],
  //     emailpcm:[this.data.emailpcm],
  //     tsc:[this.data.tsc],
  //     tscmembers:[this.data.tscmembers],
  //     tsctenure:[this.data.tsctenure],
  //     epcc:[this.data.epcc],
  //     epccmembers:[this.data.epccmembers],
  //     epcctenure:[this.data.epcctenure],
  //     pt:[this.data.pt],
  //     ptmembers:[this.data.ptmembers],
  //     pttenure:[this.data.pttenure],
  //     sacouncil:[this.data.sacouncil],
  //     samembers:[this.data.samembers],
  //     satenure:[this.data.satenure],
  //     ggcc:[this.data.ggcc],
  //     schoolmc:[this.data.schoolmc],
  //     constitutionmc:[this.data.constitutionmc],
  //     mcmembers:[this.data.mcmembers],
  //     mctenure:[this.data.mctenure],
  //     schlocation:[this.data.schlocation],
  //     scharea:[this.data.scharea],
  //     builduparea:[this.data.builduparea],
  //     playarea:[this.data.playarea],
  //     nobuildings:[this.data.nobuildings],
  //     differentlyavail:[this.data.differentlyavail],
  //     noofstairs:[this.data.noofstairs],
  //     nooflifts:[this.data.nooflifts],
  //     croom:[this.data.croom],
  //     sroom:[this.data.sroom],
  //     pl:[this.data.pl],
  //     cl:[this.data.cl],
  //     bl:[this.data.bl],
  //     ml:[this.data.ml],
  //     csl:[this.data.csl],
  //     ll:[this.data.ll],
  //     hsl:[this.data.hsl],
  //     library:[this.data.library],
  //     audit:[this.data.audit],
  //     cr:[this.data.cr],
  //     up:[this.data.up],
  //     prc:[this.data.prc],
  //     sickr:[this.data.sickr],
  //     canteen:[this.data.canteen],
  //     sr:[this.data.sr],
  //     orh:[this.data.orh],
  //     sut:[this.data.sut],
  //     stut:[this.data.stut],
  //     rooms:[this.data.rooms],
  //     speneeds:[this.data.speneeds],
  //     handlesn:[this.data.handlesn],
  //     bw:[this.data.bw],
  //     bwyes:[this.data.bwyes],
  //     cctv:[this.data.cctv],
  //     ds:[this.data.ds],
  //     hmcamera:[this.data.hmcamera],
  //     msg:[this.data.msg],
  //     hmmalesg:[this.data.hmmalesg],
  //     femalesg:[this.data.femalesg],
  //     hwfemalesg:[this.data.hwfemalesg],
  //     drinkingwf:[this.data.drinkingwf],
  //     pdf:[this.data.pdf],
  //     mms:[this.data.mms],
  //     nobuses:[this.data.nobuses],
  //     gpsec:[this.data.gpsec],
  //     nola:[this.data.nola],
  //     firstak:[this.data.firstak],
  //     drinkingwa:[this.data.drinkingwa],
  //     nobusessc:[this.data.nobusessc],
  //     efgfbp:[this.data.efgfbp],
  //     freetsobts:[this.data.freetsobts],
  //     // mmfainsch:[this.data.mmfainsch],
  //     lot:[this.data.lot],
  //     lct:[this.data.lct],
  //     tnolb:[this.data.tnolb],
  //     tnolm:[this.data.tnolm],
  //     tnold:[this.data.tnold],
  //     tnoeb:[this.data.tnoeb],
  //     oalr:[this.data.oalr],
  //     slfps:[this.data.slfps],
  //     provisionrt:[this.data.provisionrt],
  //     mmfas1:[this.data.mmfas1],
  //     mmfas2:[this.data.mmfas2],
  //     mmfas3:[this.data.mmfas3],
  //     mmfas4:[this.data.mmfas4],
  //     mmfas5:[this.data.mmfas5],


  //     phmpmale:[this.data.phmpmale],
  //     phmpfmale:[this.data.phmpfmale],
  //     phmtmale:[this.data.phmtmale],
  //     phmtfmale:[this.data.phmtfmale],
  //     // phmTmale:[this.data.phmTmale],
  //     // phmTfmale:[this.data.phmTfmale],
  //     vppmale:[this.data.vppmale],
  //     vppfmale:[this.data.vppfmale],
  //     vptmale:[this.data.vptmale],
  //     vptfmale:[this.data.vptfmale],
  //     // vpTmale:[this.data.vpTmale],
  //     // vpTfmale:[this.data.vpTfmale],
  //     PGTpmale:[this.data.PGTpmale],
  //     PGTpfmale:[this.data.PGTpfmale],
  //     PGTtmale:[this.data.PGTtmale],
  //     PGTtfmale:[this.data.PGTtfmale],
  //     // PGTTmale:[this.data.PGTTmale],
  //     // PGTTfmale:[this.data.PGTTfmale],
  //     TGTpmale:[this.data.TGTpmale],
  //     TGTpfmale:[this.data.TGTpfmale],
  //     TGTtmale:[this.data.TGTtmale],
  //     TGTtfmale:[this.data.TGTtfmale],
  //     // TGTTmale:[this.data.TGTTmale],
  //     // TGTTfmale:[this.data.TGTTfmale],
  //     PRTpmale:[this.data.PRTpmale],
  //     PRTpfmale:[this.data.PRTpfmale],
  //     PRTtmale:[this.data.PRTtmale],
  //     PRTtfmale:[this.data.PRTtfmale],
  //     // PRTTmale:[this.data.PRTTmale],
  //     // PRTTfmale:[this.data.PRTTfmale],
  //     NTTpmale:[this.data.NTTpmale],
  //     NTTpfmale:[this.data.NTTpfmale],
  //     NTTtmale:[this.data.NTTtmale],
  //     NTTtfmale:[this.data.NTTtfmale],
  //     // NTTTmale:[this.data.NTTTmale],
  //     // NTTTfmale:[this.data.NTTTfmale],
  //     UTpmale:[this.data.UTpmale],
  //     UTpfmale:[this.data.UTpfmale],
  //     UTtmale:[this.data.UTtmale],
  //     UTtfmale:[this.data.UTtfmale],
  //     // UTTmale:[this.data.UTTmale],
  //     // UTTfmale:[this.data.UTTfmale],
  //     Lpmale:[this.data.Lpmale],
  //     Lpfmale:[this.data.Lpfmale],
  //     Ltmale:[this.data.Ltmale],
  //     Ltfmale:[this.data.Ltfmale],
  //     // LTmale:[this.data.LTmale],
  //     // LTfmale:[this.data.LTfmale],
  //     Artspmale:[this.data.Artspmale],
  //     Artspfmale:[this.data.Artspfmale],
  //     Artstmale:[this.data.Artstmale],
  //     Artstfmale:[this.data.Artstfmale],
  //     // ArtsTmale:[this.data.ArtsTmale],
  //     // ArtsTfmale:[this.data.ArtsTfmale],
  //     Cpmale:[this.data.Cpmale],
  //     Cpfmale:[this.data.Cpfmale],
  //     Ctmale:[this.data.Ctmale],
  //     Ctfmale:[this.data.Ctfmale],
  //     // CTmale:[this.data.CTmale],
  //     // CTfmale:[this.data.CTfmale],
  //     CLpmale:[this.data.CLpmale],
  //     CLpfmale:[this.data.CLpfmale],
  //     CLtmale:[this.data.CLtmale],
  //     CLtfmale:[this.data.CLtfmale],
  //     // CLTmale:[this.data.CLTmale],
  //     // CLTfmale:[this.data.CLTfmale],
  //     FMpmale:[this.data.FMpmale],
  //     FMpfmale:[this.data.FMpfmale],
  //     FMtmale:[this.data.FMtmale],
  //     FMtfmale:[this.data.FMtfmale],
  //     // FMTmale:[this.data.FMTmale],
  //     // FMTfmale:[this.data.FMTfmale],
  //     Nursepmale:[this.data.Nursepmale],
  //     Nursepfmale:[this.data.Nursepfmale],
  //     Nursetmale:[this.data.Nursetmale],
  //     Nursetfmale:[this.data.Nursetfmale],
  //     // NurseTmale:[this.data.NurseTmale],
  //     // NurseTfmale:[this.data.NurseTfmale],
  //     PTpmale:[this.data.PTpmale],
  //     PTpfmale:[this.data.PTpfmale],
  //     PTtmale:[this.data.PTtmale],
  //     PTtfmale:[this.data.PTtfmale],
  //     // PTTmale:[this.data.PTTmale],
  //     // PTTfmale:[this.data.PTTfmale],
  //     // Totalpmale:[this.data.Totalpmale],
  //     // Totalpfmale:[this.data.Totalpfmale],
  //     // Totaltmale:[this.data.Totaltmale],
  //     // Totaltfmale:[this.data.Totaltfmale],
  //     // TotalTmale:[this.data.TotalTmale],
  //     // TotalTfmale:[this.data.TotalTfmale],

  //     ofmaper:[this.data.ofmaper],
  //     ofmatemp:[this.data.ofmatemp],
  //     ofmapart:[this.data.ofmapart],
  //     // ofmatotal:[this.data.ofmatotal],
  //     ofasper:[this.data.ofasper],
  //     ofastemp:[this.data.ofastemp],
  //     ofaspart:[this.data.ofaspart],
  //     // ofastotal:[this.data.ofastotal],
  //     clerkper:[this.data.clerkper],
  //     clerktemp:[this.data.clerktemp],
  //     clerkpart:[this.data.clerkpart],
  //     // clerktotal:[this.data.clerktotal],
  //     labper:[this.data.labper],
  //     labtemp:[this.data.labtemp],
  //     labpart:[this.data.labpart],
  //     // labtotal:[this.data.labtotal],
  //     accountper:[this.data.accountper],
  //     accounttemp:[this.data.accounttemp],
  //     accountpart:[this.data.accountpart],
  //     // accounttotal:[this.data.accounttotal],
  //     peonsper:[this.data.peonsper],
  //     peonstemp:[this.data.peonstemp],
  //     peonspart:[this.data.peonspart],
  //     // peonstotal:[this.data.peonstotal],
  //     othersper:[this.data.othersper],
  //     otherstemp:[this.data.otherstemp],
  //     otherspart:[this.data.otherspart],
  //     // otherstotal:[this.data.otherstotal],

  //     no_of_activities:[this.data.no_of_activities],
  //     no_of_groups:[this.data.no_of_groups],
  //     no_of_community:[this.data.no_of_community],
  //     no_of_sports_school:[this.data.no_of_sports_school],
  //     no_of_sports_zonal:[this.data.no_of_sports_zonal],
  //     no_of_sports_district:[this.data.no_of_sports_district],
  //     no_of_sports_state:[this.data.no_of_sports_state],
  //     no_of_sports_national:[this.data.no_of_sports_national],
  //     no_of_sports_international:[this.data.no_of_sports_international],
  //     no_of_competition_school:[this.data.no_of_competition_school],
  //     no_of_competition_zonal:[this.data.no_of_competition_zonal],
  //     no_of_competition_district:[this.data.no_of_competition_district],
  //     no_of_competition_state:[this.data.no_of_competition_state],
  //     no_of_competition_national:[this.data.no_of_competition_national],
  //     no_of_competition_international:[this.data.no_of_competition_international],
  //     no_of_interprograms_school:[this.data.no_of_interprograms_school],
  //     no_of_interprograms_zonal:[this.data.no_of_interprograms_zonal],
  //     no_of_interprograms_district:[this.data.no_of_interprograms_district],
  //     no_of_interprograms_state:[this.data.no_of_interprograms_state],
  //     no_of_interprograms_national:[this.data.no_of_interprograms_national],
  //     no_of_interprograms_international:[this.data.no_of_interprograms_international],

  //     acad_year_begins:[this.data.acad_year_begins],
  //     acad_year_ends:[this.data.acad_year_ends],
  //     workingdays_21_22:[this.data.workingdays_21_22],
  //     workingdays_20_21:[this.data.workingdays_20_21],
  //     workingdays_19_20:[this.data.workingdays_19_20],
  //     eachday_workhours_21_22:[this.data.eachday_workhours_21_22],
  //     eachday_workhours_20_21:[this.data.eachday_workhours_20_21],
  //     eachday_workhours_19_20:[this.data.eachday_workhours_19_20],
  //     totalhours_21_22:[this.data.totalhours_21_22],
  //     totalhours_20_21:[this.data.totalhours_20_21],
  //     totalhours_19_20:[this.data.totalhours_19_20],
  //     non_instruct_workdays_21_22:[this.data.non_instruct_workdays_21_22],
  //     non_instruct_workdays_20_21:[this.data.non_instruct_workdays_20_21],
  //     non_instruct_workdays_19_20:[this.data.non_instruct_workdays_19_20],
  //     holiday_except_holidays_21_22:[this.data.holiday_except_holidays_21_22],
  //     holiday_except_holidays_20_21:[this.data.holiday_except_holidays_20_21],
  //     holiday_except_holidays_19_20:[this.data.holiday_except_holidays_19_20],
  //     teaching_periods_perweek:[this.data.teaching_periods_perweek],
  //     faith_periods_perweek:[this.data.faith_periods_perweek],
  //     period_duration:[this.data.period_duration],
  //     totalhours_forclubs:[this.data.totalhours_forclubs],
  //     summer_timein:[this.data.summer_timein],
  //     summer_timeout:[this.data.summer_timeout],
  //     winter_timein:[this.data.winter_timein],
  //     winter_timeout:[this.data.winter_timeout],
  //     school_shift:[this.data.school_shift],


      

      
  //   })

  // }

  next(){
    this.step +=1; 
  }
  previous(){
    this.step -=1;
  }

  but(id:any){
    this.step=this.butt+id;
    
  }



  // if you want to register through this UI just uncomment it and use it for post method

  // submit(){
  //   console.log("data",this.generalForm.value);

  //   this.sub.po(this.generalForm.value).subscribe((data:any)=>{
  //     console.log(data);
  //     this.Data=data;
  //     this.route.navigate(['/home'])

  //   })
    // console.log("data",this.Data);
  // }




  submit(){
    console.log("data",this.generalForm.value);

    this.sub.profileput(this.generalForm.value).subscribe((data:any)=>{
      console.log(data);
      this.Data=data;
      this.route.navigate(['/home'])

    })
    // console.log("data",this.Data);
  }
  }
 
