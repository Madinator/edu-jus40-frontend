import { Injectable } from '@angular/core';
import { Subjects } from 'src/app/shared/models/index';

@Injectable({
  providedIn: 'root'
})
export class SubjectSelectionServiceService {

  constructor() { }

  private subjectRules: { [key: string]: string[] } = {
    [Subjects.Mathematics]: [Subjects.Physics, Subjects.Geography, Subjects.Informatics],
    [Subjects.Physics]: [Subjects.Mathematics, Subjects.Chemistry],
    [Subjects.Geography]: [Subjects.Mathematics, Subjects.Biology, Subjects.WorldHistory, Subjects.ForeignLanguage],
    [Subjects.Chemistry]: [Subjects.Physics, Subjects.Geography],
    [Subjects.Biology]: [Subjects.Chemistry, Subjects.Geography],
    [Subjects.WorldHistory]: [Subjects.Geography, Subjects.LawBasics, Subjects.ForeignLanguage],
    [Subjects.LawBasics]: [Subjects.WorldHistory],
    [Subjects.ForeignLanguage]: [Subjects.WorldHistory, Subjects.Geography],
    [Subjects.CreativeExam]: [Subjects.CreativeExam],
    [Subjects.RussianLanguage]: [Subjects.RussianLiterature],
    [Subjects.RussianLiterature]: [Subjects.RussianLanguage],
    [Subjects.KazakhLanguage]: [Subjects.KazakhLiterature],
    [Subjects.KazakhLiterature]: [Subjects.KazakhLanguage],
    [Subjects.Informatics]: [Subjects.Mathematics]
  };

  public getAvailableSubjects(selectedSubject: string): string[] {
    return this.subjectRules[selectedSubject] || [];
  }
}
