import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'zeus-welcome',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  private httpClient : HttpClient = inject(HttpClient);

  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
      const welcomeSubscription =
        this.httpClient.get("http://localhost:8088/api/v1/zeus/welcome").subscribe({
          next: data => {
            console.log(data);
          }
        });

      this.destroyRef.onDestroy(() => {
        welcomeSubscription.unsubscribe();
      })
  }

}
